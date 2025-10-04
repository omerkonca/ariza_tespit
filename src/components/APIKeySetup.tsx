import React from 'react';
import { Key, AlertCircle, Copy, ExternalLink } from 'lucide-react';

interface APIKeySetupProps {
  onBack: () => void;
}

const APIKeySetup: React.FC<APIKeySetupProps> = ({ onBack }) => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="api-key-setup">
      <div className="setup-container">
        <div className="setup-header">
          <Key size={48} className="setup-icon" />
          <h1>OpenAI API Anahtarı Gerekli</h1>
          <p>Yapay zeka chat özelliğini kullanmak için OpenAI API anahtarı gereklidir.</p>
        </div>

        <div className="setup-steps">
          <div className="step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>OpenAI Hesabı Oluşturun</h3>
              <p>Eğer hesabınız yoksa, OpenAI'da ücretsiz hesap oluşturun.</p>
              <a 
                href="https://platform.openai.com/signup" 
                target="_blank" 
                rel="noopener noreferrer"
                className="external-link"
              >
                <ExternalLink size={16} />
                OpenAI'da Hesap Oluştur
              </a>
            </div>
          </div>

          <div className="step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>API Anahtarı Oluşturun</h3>
              <p>OpenAI platformunda yeni bir API anahtarı oluşturun.</p>
              <a 
                href="https://platform.openai.com/api-keys" 
                target="_blank" 
                rel="noopener noreferrer"
                className="external-link"
              >
                <ExternalLink size={16} />
                API Anahtarı Oluştur
              </a>
            </div>
          </div>

          <div className="step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>Proje Klasöründe .env Dosyası Oluşturun</h3>
              <p>Proje kök dizininde <code>.env</code> dosyası oluşturun ve aşağıdaki kodu ekleyin:</p>
              <div className="code-block">
                <code>VITE_OPENAI_API_KEY=your_actual_api_key_here</code>
                <button 
                  onClick={() => copyToClipboard('VITE_OPENAI_API_KEY=your_actual_api_key_here')}
                  className="copy-button"
                  title="Kopyala"
                >
                  <Copy size={16} />
                </button>
              </div>
            </div>
          </div>

          <div className="step">
            <div className="step-number">4</div>
            <div className="step-content">
              <h3>Uygulamayı Yeniden Başlatın</h3>
              <p>Değişikliklerin etkili olması için uygulamayı yeniden başlatın.</p>
              <div className="code-block">
                <code>npm run dev</code>
                <button 
                  onClick={() => copyToClipboard('npm run dev')}
                  className="copy-button"
                  title="Kopyala"
                >
                  <Copy size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="setup-info">
          <div className="info-box">
            <AlertCircle size={20} />
            <div>
              <h4>Güvenlik Notu</h4>
              <p>API anahtarınızı kimseyle paylaşmayın. Bu anahtar sadece sizin kullanımınız içindir.</p>
            </div>
          </div>
        </div>

        <div className="setup-actions">
          <button onClick={onBack} className="btn-secondary">
            Ana Sayfaya Dön
          </button>
        </div>
      </div>
    </div>
  );
};

export default APIKeySetup;
