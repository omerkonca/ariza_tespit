# Arıza Tespit Uygulaması

Modern web teknolojileri kullanılarak geliştirilmiş, araç arızalarını tespit etmeye yönelik akıllı bir uygulama.

## 🚗 Özellikler

- **Akıllı Teşhis Sistemi**: Seçilen semptomlara göre olası arızaları tespit eder
- **Araç Bilgileri Entegrasyonu**: Marka, model, yıl, kilometre ve yakıt türüne göre daha doğru teşhis
- **Aciliyet Sınıflandırması**: Arızaları kritik, yüksek, orta ve düşük olarak sınıflandırır
- **Güven Skoru**: Her teşhis için güvenilirlik yüzdesi gösterir
- **Çözüm Önerileri**: Tespit edilen arızalar için detaylı çözüm önerileri
- **Modern UI/UX**: Responsive ve kullanıcı dostu arayüz

## 🛠️ Teknolojiler

- **React 18** - Modern UI kütüphanesi
- **TypeScript** - Tip güvenliği
- **Vite** - Hızlı geliştirme ortamı
- **Lucide React** - Modern ikonlar
- **CSS3** - Responsive tasarım

## 🚀 Kurulum

1. Projeyi klonlayın:
```bash
git clone <repository-url>
cd ariza_tespit
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. OpenAI API anahtarını ayarlayın:
   - OpenAI hesabınızda API anahtarı oluşturun: https://platform.openai.com/api-keys
   - Proje kök dizininde `.env` dosyası oluşturun
   - `.env` dosyasına şunu ekleyin:
   ```
   VITE_OPENAI_API_KEY=your_actual_api_key_here
   ```

4. Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

5. Tarayıcınızda `http://localhost:3000` adresini açın.

## 📱 Kullanım

1. **Araç Bilgileri**: İlk adımda aracınızın marka, model, yıl, kilometre ve yakıt türü bilgilerini girin.

2. **Semptom Seçimi**: Aracınızda yaşadığınız sorunları kategorilere göre seçin:
   - Motor arızaları
   - Fren sistemi
   - Elektrik sistemi
   - Şanzıman
   - Süspansiyon
   - Klima sistemi

3. **Teşhis Sonuçları**: Uygulama, seçilen semptomlara göre olası arızaları listeler ve her biri için:
   - Güven skoru
   - Aciliyet seviyesi
   - Detaylı çözüm önerileri

## 🧠 Algoritma

Uygulama, seçilen semptomları analiz ederek:

1. **Eşleşme Analizi**: Her arıza için semptom eşleşme oranını hesaplar
2. **Güven Skoru**: Problem olasılığı, semptom kapsamı ve eşleşme oranına göre güven skoru hesaplar
3. **Araç Faktörleri**: Yaş, kilometre ve yakıt türüne göre skorları ayarlar
4. **Sıralama**: En yüksek güven skoruna göre sonuçları sıralar

## 📊 Veri Yapısı

### Semptomlar
- Motor arızaları (çalışmama, titreme, ısınma, duman, vuruntu)
- Fren sistemi (gıcırtı, yumuşaklık, çekme, titreşim)
- Elektrik sistemi (akü, farlar, alternatör, marş)
- Şanzıman (kayma, gürültü, debriyaj)
- Süspansiyon (gürültü, zıplama, direksiyon titreşimi)
- Klima sistemi (soğutmama, koku, gürültü)

### Arızalar
- Her arıza için semptom listesi
- Olasılık değeri
- Aciliyet seviyesi
- Çözüm önerileri

## 🎯 Gelecek Özellikler

- [ ] Makine öğrenmesi entegrasyonu
- [ ] Fotoğraf yükleme ile görsel teşhis
- [ ] Servis bulucu entegrasyonu
- [ ] Arıza geçmişi takibi
- [ ] Mobil uygulama versiyonu
- [ ] Çoklu dil desteği

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 📞 İletişim

Sorularınız için issue açabilir veya iletişime geçebilirsiniz.
