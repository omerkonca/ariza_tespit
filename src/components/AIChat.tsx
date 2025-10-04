import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, ArrowLeft, Trash2, Copy, Check, AlertCircle } from 'lucide-react';
// import AIService from '../services/aiService';

interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

interface AIChatProps {
  onBack: () => void;
  vehicleInfo?: {
    brandName: string;
    modelName: string;
    year: number;
    engineName: string;
  } | null;
}

const AIChat: React.FC<AIChatProps> = ({ onBack, vehicleInfo }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedMessageId, setCopiedMessageId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  // const aiService = AIService.getInstance();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Araç bilgisi varsa hoş geldin mesajı ekle
    if (vehicleInfo && messages.length === 0) {
      const welcomeMessage: Message = {
        id: 'welcome',
        type: 'ai',
        content: `Merhaba! ${vehicleInfo.brandName} ${vehicleInfo.modelName} (${vehicleInfo.year}) aracınız hakkında size nasıl yardımcı olabilirim? Aracınızla ilgili herhangi bir sorunuz varsa çekinmeden sorun.`,
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
      
      // AI servisine araç bilgisini gönder
      // aiService.setVehicleContext(vehicleInfo);
    }
  }, [vehicleInfo, messages.length]);

  const generateAIResponse = async (): Promise<string> => {
    try {
      // Gerçek AI servisini kullan
      // const response = await aiService.generateResponse(userMessage, vehicleInfo || undefined);
      // return response;
      
      // Geçici basit yanıt
      return "Yapay zeka servisi geçici olarak devre dışı. Lütfen daha sonra tekrar deneyin.";
    } catch (error) {
      console.error('AI Response Error:', error);
      return 'Üzgünüm, bir hata oluştu. Lütfen sorunuzu tekrar sorun.';
    }
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);
    setError(null);

    try {
      const aiResponse = await generateAIResponse();
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: aiResponse,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('AI yanıt hatası:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: 'Üzgünüm, şu anda bir hata oluştu. Lütfen tekrar deneyin.',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
      setError('AI servisi ile bağlantı kurulamadı. Lütfen internet bağlantınızı kontrol edin.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const copyMessage = (messageId: string, content: string) => {
    navigator.clipboard.writeText(content);
    setCopiedMessageId(messageId);
    setTimeout(() => setCopiedMessageId(null), 2000);
  };

  const clearChat = () => {
    setMessages([]);
    setError(null);
    // aiService.clearHistory();
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('tr-TR', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <div className="ai-chat-container">
      <div className="chat-header">
        <button onClick={onBack} className="back-button">
          <ArrowLeft size={20} />
          Geri
        </button>
        <div className="chat-title">
          <Bot size={24} />
          <span>Yapay Zeka Asistanı</span>
        </div>
        <button onClick={clearChat} className="clear-button" title="Sohbeti Temizle">
          <Trash2 size={20} />
        </button>
      </div>

      <div className="chat-messages">
        {error && (
          <div className="error-message">
            <AlertCircle size={20} />
            <span>{error}</span>
          </div>
        )}
        
        {messages.map((message) => (
          <div key={message.id} className={`message ${message.type}`}>
            <div className="message-avatar">
              {message.type === 'ai' ? <Bot size={20} /> : <User size={20} />}
            </div>
            <div className="message-content">
              <div className="message-text">{message.content}</div>
              <div className="message-footer">
                <span className="message-time">{formatTime(message.timestamp)}</span>
                <button
                  onClick={() => copyMessage(message.id, message.content)}
                  className="copy-button"
                  title="Kopyala"
                >
                  {copiedMessageId === message.id ? <Check size={16} /> : <Copy size={16} />}
                </button>
              </div>
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="message ai">
            <div className="message-avatar">
              <Bot size={20} />
            </div>
            <div className="message-content">
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      <div className="chat-input">
        <div className="input-container">
          <textarea
            ref={inputRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Aracınızla ilgili sorunuzu yazın..."
            className="message-input"
            rows={1}
            disabled={isLoading}
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputValue.trim() || isLoading}
            className="send-button"
          >
            <Send size={20} />
          </button>
        </div>
        <div className="input-hint">
          Enter tuşu ile gönder, Shift+Enter ile yeni satır
        </div>
      </div>
    </div>
  );
};

export default AIChat;
