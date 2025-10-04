import { Symptom } from '../types';

export const symptoms: Symptom[] = [
  // Motor Arızaları
  {
    id: 'engine_no_start',
    name: 'Motor Çalışmıyor',
    description: 'Araç çalıştırılmaya çalışıldığında motor dönmüyor',
    category: 'Motor'
  },
  {
    id: 'engine_rough_idle',
    name: 'Motor Titriyor',
    description: 'Motor rölantide titriyor veya düzensiz çalışıyor',
    category: 'Motor'
  },
  {
    id: 'engine_overheating',
    name: 'Motor Isınıyor',
    description: 'Motor sıcaklık göstergesi yüksek değerlerde',
    category: 'Motor'
  },
  {
    id: 'engine_smoke',
    name: 'Motor Dumanı',
    description: 'Egzozdan aşırı duman çıkıyor',
    category: 'Motor'
  },
  {
    id: 'engine_knocking',
    name: 'Motor Vuruntusu',
    description: 'Motor çalışırken vuruntu sesi geliyor',
    category: 'Motor'
  },

  // Fren Sistemi
  {
    id: 'brake_squeal',
    name: 'Fren Gıcırtısı',
    description: 'Fren yaparken gıcırtı sesi geliyor',
    category: 'Fren Sistemi'
  },
  {
    id: 'brake_soft',
    name: 'Fren Yumuşak',
    description: 'Fren pedalı çok yumuşak ve etkisiz',
    category: 'Fren Sistemi'
  },
  {
    id: 'brake_pull',
    name: 'Fren Çekiyor',
    description: 'Fren yaparken araç bir tarafa çekiyor',
    category: 'Fren Sistemi'
  },
  {
    id: 'brake_vibration',
    name: 'Fren Titreşimi',
    description: 'Fren yaparken direksiyon veya pedal titriyor',
    category: 'Fren Sistemi'
  },

  // Elektrik Sistemi
  {
    id: 'battery_dead',
    name: 'Akü Bitti',
    description: 'Araç çalışmıyor, elektrik yok',
    category: 'Elektrik'
  },
  {
    id: 'lights_dimming',
    name: 'Farlar Sönüyor',
    description: 'Farlar sürekli sönüyor veya parlaklığı değişiyor',
    category: 'Elektrik'
  },
  {
    id: 'alternator_fail',
    name: 'Alternatör Arızası',
    description: 'Akü şarj olmuyor, şarj göstergesi yanıyor',
    category: 'Elektrik'
  },
  {
    id: 'starter_problem',
    name: 'Marş Motoru Arızası',
    description: 'Kontak çevrildiğinde marş motoru çalışmıyor',
    category: 'Elektrik'
  },

  // Şanzıman
  {
    id: 'transmission_slip',
    name: 'Vites Kayması',
    description: 'Vites değiştirirken kayma oluyor',
    category: 'Şanzıman'
  },
  {
    id: 'transmission_noise',
    name: 'Şanzıman Gürültüsü',
    description: 'Vites kutusundan anormal sesler geliyor',
    category: 'Şanzıman'
  },
  {
    id: 'clutch_slip',
    name: 'Debriyaj Kayması',
    description: 'Debriyaj pedalı bırakıldığında motor devri artıyor ama araç hızlanmıyor',
    category: 'Şanzıman'
  },

  // Süspansiyon
  {
    id: 'suspension_noise',
    name: 'Süspansiyon Gürültüsü',
    description: 'Yolda giderken süspansiyondan sesler geliyor',
    category: 'Süspansiyon'
  },
  {
    id: 'car_bouncing',
    name: 'Araç Zıplıyor',
    description: 'Araç yolda zıplıyor veya sallanıyor',
    category: 'Süspansiyon'
  },
  {
    id: 'steering_wheel_vibration',
    name: 'Direksiyon Titreşimi',
    description: 'Direksiyon sürekli titriyor',
    category: 'Süspansiyon'
  },

  // Klima Sistemi
  {
    id: 'ac_not_cooling',
    name: 'Klima Soğutmuyor',
    description: 'Klima açık ama soğuk hava gelmiyor',
    category: 'Klima'
  },
  {
    id: 'ac_strange_smell',
    name: 'Klima Kokusu',
    description: 'Klima açıldığında kötü koku geliyor',
    category: 'Klima'
  },
  {
    id: 'ac_noise',
    name: 'Klima Gürültüsü',
    description: 'Klima çalışırken anormal sesler geliyor',
    category: 'Klima'
  }
];
