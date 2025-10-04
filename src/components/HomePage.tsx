import { useState, useEffect } from 'react';
import { Car, Wrench, Zap, Shield, Clock, Users, Star, ArrowRight, Play, CheckCircle, MessageCircle } from 'lucide-react';

interface HomePageProps {
  onGetStarted: () => void;
  onAIChat: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onGetStarted, onAIChat }) => {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [stats, setStats] = useState({
    users: 0,
    diagnoses: 0,
    accuracy: 0,
    satisfaction: 0
  });

  const features = [
    {
      icon: <Zap size={48} />,
      title: "Hızlı Teşhis",
      description: "Sadece birkaç dakikada aracınızın arızasını tespit edin",
      color: "#ff6b6b"
    },
    {
      icon: <Shield size={48} />,
      title: "Güvenilir Sonuçlar",
      description: "Uzman deneyimi ile %95 doğruluk oranında teşhis",
      color: "#4ecdc4"
    },
    {
      icon: <Clock size={48} />,
      title: "7/24 Hizmet",
      description: "İstediğiniz zaman, istediğiniz yerde arıza tespiti",
      color: "#45b7d1"
    },
    {
      icon: <Users size={48} />,
      title: "Uzman Desteği",
      description: "Binlerce uzmanın deneyimi tek platformda",
      color: "#96ceb4"
    }
  ];

  const benefits = [
    "Anında arıza tespiti",
    "Detaylı çözüm önerileri",
    "Aciliyet seviyesi belirleme",
    "Maliyet tahmini",
    "Servis önerileri",
    "Arıza geçmişi takibi"
  ];

  const testimonials = [
    {
      name: "Ahmet Yılmaz",
      role: "Araç Sahibi",
      content: "Çok pratik bir uygulama. Aracımın arızasını hızlıca tespit ettim ve doğru çözümü buldum.",
      rating: 5
    },
    {
      name: "Mehmet Kaya",
      role: "Teknisyen",
      content: "Müşterilerime daha iyi hizmet verebilmek için bu uygulamayı kullanıyorum. Çok faydalı.",
      rating: 5
    },
    {
      name: "Ayşe Demir",
      role: "Araç Sahibi",
      content: "Kadın olarak araç konularında çok bilgim yoktu ama bu uygulama sayesinde kendime güvenim arttı.",
      rating: 5
    }
  ];

  // Animasyonlu istatistikler
  useEffect(() => {
    const animateStats = () => {
      setStats({
        users: 12500,
        diagnoses: 45000,
        accuracy: 95,
        satisfaction: 98
      });
    };

    const timer = setTimeout(animateStats, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Özellikler arası geçiş
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="gradient-text">Arıza Tespit</span>
              <br />
              Uygulaması
            </h1>
            <p className="hero-subtitle">
              Aracınızın arızasını <strong>yapay zeka</strong> ile hızlı ve doğru bir şekilde tespit edin.
              Binlerce uzmanın deneyimi tek platformda!
            </p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={onGetStarted}>
                <Car size={20} style={{ marginRight: '8px' }} />
                Hemen Başla
                <ArrowRight size={20} style={{ marginLeft: '8px' }} />
              </button>
              <button className="btn-secondary" onClick={onAIChat}>
                <MessageCircle size={20} style={{ marginRight: '8px' }} />
                Yapay Zekaya Sor
              </button>
              <button className="btn-secondary">
                <Play size={20} style={{ marginRight: '8px' }} />
                Nasıl Çalışır?
              </button>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">{stats.users.toLocaleString()}+</div>
                <div className="stat-label">Kullanıcı</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">{stats.diagnoses.toLocaleString()}+</div>
                <div className="stat-label">Teşhis</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">%{stats.accuracy}</div>
                <div className="stat-label">Doğruluk</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">%{stats.satisfaction}</div>
                <div className="stat-label">Memnuniyet</div>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="car-animation">
              <Car size={120} className="car-icon" />
              <div className="diagnosis-bubbles">
                <div className="bubble bubble-1">Motor</div>
                <div className="bubble bubble-2">Fren</div>
                <div className="bubble bubble-3">Elektrik</div>
                <div className="bubble bubble-4">Şanzıman</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2>Neden Bizim Uygulamayı Seçmelisiniz?</h2>
            <p>Modern teknoloji ve uzman deneyimini birleştiren çözüm</p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`feature-card ${currentFeature === index ? 'active' : ''}`}
                style={{ '--feature-color': feature.color } as React.CSSProperties}
              >
                <div className="feature-icon" style={{ color: feature.color }}>
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <div className="container">
          <div className="section-header">
            <h2>Nasıl Çalışır?</h2>
            <p>Sadece 3 adımda arızanızı tespit edin</p>
          </div>
          <div className="steps-container">
            <div className="step-card">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Aracınızı Seçin</h3>
                <p>Marka, model, motor ve vites bilgilerini girin</p>
              </div>
            </div>
            <div className="step-arrow">→</div>
            <div className="step-card">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Semptomları İşaretleyin</h3>
                <p>Yaşadığınız sorunları kategorilere göre seçin</p>
              </div>
            </div>
            <div className="step-arrow">→</div>
            <div className="step-card">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Sonuçları Görün</h3>
                <p>Detaylı teşhis ve çözüm önerilerini alın</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <div className="benefits-content">
            <div className="benefits-text">
              <h2>Size Sağladığımız Faydalar</h2>
              <p>
                Arıza tespit uygulamamız ile zaman kaybetmeden, doğru çözümü bulun. 
                Uzman deneyimi ve modern teknolojiyi birleştiren platformumuz ile 
                aracınızın sağlığını koruyun.
              </p>
              <div className="benefits-list">
                {benefits.map((benefit, index) => (
                  <div key={index} className="benefit-item">
                    <CheckCircle size={20} className="benefit-icon" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
              <button className="btn-primary" onClick={onGetStarted}>
                <Wrench size={20} style={{ marginRight: '8px' }} />
                Hemen Deneyin
              </button>
            </div>
            <div className="benefits-visual">
              <div className="diagnosis-preview">
                <div className="preview-header">
                  <div className="preview-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <span className="preview-title">Arıza Tespit Sonucu</span>
                </div>
                <div className="preview-content">
                  <div className="preview-item">
                    <div className="preview-label">Arıza:</div>
                    <div className="preview-value">Fren Balata Aşınması</div>
                  </div>
                  <div className="preview-item">
                    <div className="preview-label">Güven:</div>
                    <div className="preview-value">%95</div>
                  </div>
                  <div className="preview-item">
                    <div className="preview-label">Aciliyet:</div>
                    <div className="preview-value high">Yüksek</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2>Kullanıcı Yorumları</h2>
            <p>Binlerce kullanıcımızın deneyimi</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#ffd700" color="#ffd700" />
                  ))}
                </div>
                <p className="testimonial-content">"{testimonial.content}"</p>
                <div className="testimonial-author">
                  <div className="author-name">{testimonial.name}</div>
                  <div className="author-role">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Chat Section */}
      <section className="ai-chat-section">
        <div className="container">
          <div className="ai-chat-content">
            <div className="ai-chat-text">
              <h2>Yapay Zeka Asistanı ile Konuşun</h2>
              <p>
                Aracınızla ilgili herhangi bir sorunuz mu var? Yapay zeka asistanımız 
                7/24 size yardımcı olmaya hazır. Doğal dil ile sorularınızı sorun, 
                anında yanıt alın.
              </p>
              <div className="ai-features">
                <div className="ai-feature">
                  <MessageCircle size={20} />
                  <span>Anında Yanıt</span>
                </div>
                <div className="ai-feature">
                  <Zap size={20} />
                  <span>7/24 Hizmet</span>
                </div>
                <div className="ai-feature">
                  <Shield size={20} />
                  <span>Uzman Bilgisi</span>
                </div>
              </div>
              <button className="btn-primary" onClick={onAIChat}>
                <MessageCircle size={20} style={{ marginRight: '8px' }} />
                Yapay Zekaya Sor
                <ArrowRight size={20} style={{ marginLeft: '8px' }} />
              </button>
            </div>
            <div className="ai-chat-visual">
              <div className="chat-preview">
                <div className="chat-message user">
                  <div className="message-avatar">U</div>
                  <div className="message-text">Aracımın motoru çalışmıyor, ne yapmalıyım?</div>
                </div>
                <div className="chat-message ai">
                  <div className="message-avatar">AI</div>
                  <div className="message-text">Motor çalışmama sorunu için öncelikle akü voltajını kontrol edin...</div>
                </div>
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Hemen Başlayın!</h2>
            <p>Aracınızın arızasını tespit etmek için sadece birkaç dakika yeterli</p>
            <div className="cta-buttons">
              <button className="btn-primary btn-large" onClick={onGetStarted}>
                <Car size={24} style={{ marginRight: '12px' }} />
                Ücretsiz Teşhis Yap
                <ArrowRight size={24} style={{ marginLeft: '12px' }} />
              </button>
              <button className="btn-secondary btn-large" onClick={onAIChat}>
                <MessageCircle size={24} style={{ marginRight: '12px' }} />
                Yapay Zekaya Sor
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
