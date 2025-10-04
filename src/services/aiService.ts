import OpenAI from 'openai';

// OpenAI API anahtarını environment variable'dan al
const OPENAI_API_KEY = (import.meta as any).env?.VITE_OPENAI_API_KEY;

// OpenAI client'ı oluştur
const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
  dangerouslyAllowBrowser: true // Sadece development için
});

export interface AIChatMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export interface VehicleInfo {
  brandName?: string;
  modelName?: string;
  year?: number;
  engineName?: string;
}

export class AIService {
  private static instance: AIService;
  private conversationHistory: AIChatMessage[] = [];

  private constructor() {
    this.initializeSystemPrompt();
  }

  public static getInstance(): AIService {
    if (!AIService.instance) {
      AIService.instance = new AIService();
    }
    return AIService.instance;
  }

  private initializeSystemPrompt() {
    this.conversationHistory = [
      {
        role: 'system',
        content: `Sen bir otomotiv uzmanı ve arıza tespit asistanısın. Türkiye'deki araç kullanıcılarına yardım ediyorsun. 

Özelliklerin:
- Otomotiv arızaları konusunda uzman bilgiye sahipsin
- Türkçe konuşuyorsun ve samimi bir ton kullanıyorsun
- Güvenlik konularında çok dikkatlisin
- Pratik ve uygulanabilir çözümler öneriyorsun
- Karmaşık teknik konuları basit dille açıklıyorsun
- Acil durumlarda servise gitmeyi öneriyorsun

Yanıtlarında:
- Kısa ve net ol
- Güvenlik öncelikli yaklaş
- Adım adım çözüm öner
- Gerekirse servise gitmeyi öner
- Samimi ve yardımsever ol
- Teknik terimleri açıkla`
      }
    ];
  }

  public async generateResponse(
    userMessage: string, 
    vehicleInfo?: VehicleInfo
  ): Promise<string> {
    try {
      // API anahtarı kontrolü
      if (!OPENAI_API_KEY) {
        throw new Error('OpenAI API anahtarı bulunamadı. Lütfen VITE_OPENAI_API_KEY environment variable\'ını ayarlayın.');
      }

      // Araç bilgisi varsa context ekle
      let contextualMessage = userMessage;
      if (vehicleInfo && vehicleInfo.brandName) {
        contextualMessage = `Araç Bilgisi: ${vehicleInfo.brandName} ${vehicleInfo.modelName || ''} (${vehicleInfo.year || ''}) - ${vehicleInfo.engineName || ''}\n\nKullanıcı Sorusu: ${userMessage}`;
      }

      // Kullanıcı mesajını geçmişe ekle
      this.conversationHistory.push({
        role: 'user',
        content: contextualMessage
      });

      // OpenAI API'ye istek gönder
      const completion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: this.conversationHistory,
        max_tokens: 500,
        temperature: 0.7,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0
      });

      const aiResponse = completion.choices[0]?.message?.content || 'Üzgünüm, bir yanıt oluşturamadım.';

      // AI yanıtını geçmişe ekle
      this.conversationHistory.push({
        role: 'assistant',
        content: aiResponse
      });

      // Geçmişi sınırla (son 10 mesaj)
      if (this.conversationHistory.length > 21) { // system + 10 user + 10 assistant
        this.conversationHistory = [
          this.conversationHistory[0], // system prompt
          ...this.conversationHistory.slice(-20) // son 20 mesaj
        ];
      }

      return aiResponse;

    } catch (error) {
      console.error('AI Service Error:', error);
      
      // Hata türüne göre farklı mesajlar
      if (error instanceof Error) {
        if (error.message.includes('API anahtarı')) {
          return 'Üzgünüm, yapay zeka servisi şu anda kullanılamıyor. Lütfen daha sonra tekrar deneyin veya geleneksel arıza tespit yöntemini kullanın.';
        }
        
        if (error.message.includes('rate limit')) {
          return 'Çok fazla istek gönderildi. Lütfen birkaç dakika bekleyip tekrar deneyin.';
        }
        
        if (error.message.includes('network')) {
          return 'İnternet bağlantınızı kontrol edin ve tekrar deneyin.';
        }
      }

      return 'Üzgünüm, bir hata oluştu. Lütfen sorunuzu tekrar sorun veya geleneksel arıza tespit yöntemini kullanın.';
    }
  }

  public clearHistory() {
    this.initializeSystemPrompt();
  }

  public getHistory(): AIChatMessage[] {
    return [...this.conversationHistory];
  }

  public setVehicleContext(vehicleInfo: VehicleInfo) {
    // Araç bilgisi değiştiğinde context'i güncelle
    if (vehicleInfo.brandName) {
      const vehicleContext = `Kullanıcının aracı: ${vehicleInfo.brandName} ${vehicleInfo.modelName || ''} (${vehicleInfo.year || ''}) - ${vehicleInfo.engineName || ''}`;
      
      // System prompt'u güncelle
      this.conversationHistory[0].content += `\n\nMevcut araç bilgisi: ${vehicleContext}`;
    }
  }
}

export default AIService;
