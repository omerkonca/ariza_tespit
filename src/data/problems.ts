import { Problem } from '../types';

export const problems: Problem[] = [
  // Motor Arızaları
  {
    id: 'dead_battery',
    name: 'Akü Bitti',
    description: 'Araç aküsü tamamen bitmiş durumda',
    symptoms: ['battery_dead', 'engine_no_start', 'lights_dimming'],
    probability: 0.9,
    solution: 'Aküyü şarj edin veya yeni akü takın. Alternatör kontrolü yapın.',
    urgency: 'high'
  },
  {
    id: 'alternator_failure',
    name: 'Alternatör Arızası',
    description: 'Alternatör aküyü şarj edemiyor',
    symptoms: ['alternator_fail', 'battery_dead', 'lights_dimming'],
    probability: 0.85,
    solution: 'Alternatörü kontrol edin ve gerekirse değiştirin. Kayış kontrolü yapın.',
    urgency: 'high'
  },
  {
    id: 'starter_motor_failure',
    name: 'Marş Motoru Arızası',
    description: 'Marş motoru çalışmıyor',
    symptoms: ['starter_problem', 'engine_no_start'],
    probability: 0.8,
    solution: 'Marş motorunu kontrol edin. Elektrik bağlantılarını kontrol edin.',
    urgency: 'high'
  },
  {
    id: 'fuel_system_issue',
    name: 'Yakıt Sistemi Arızası',
    description: 'Yakıt sistemi düzgün çalışmıyor',
    symptoms: ['engine_no_start', 'engine_rough_idle', 'engine_smoke'],
    probability: 0.75,
    solution: 'Yakıt filtresini kontrol edin. Yakıt pompasını test edin.',
    urgency: 'medium'
  },
  {
    id: 'engine_overheating',
    name: 'Motor Aşırı Isınması',
    description: 'Motor soğutma sistemi yetersiz',
    symptoms: ['engine_overheating', 'engine_knocking'],
    probability: 0.9,
    solution: 'Soğutma suyu seviyesini kontrol edin. Radyatör ve fan kontrolü yapın.',
    urgency: 'critical'
  },

  // Fren Sistemi
  {
    id: 'brake_pad_wear',
    name: 'Fren Balata Aşınması',
    description: 'Fren balataları aşınmış',
    symptoms: ['brake_squeal', 'brake_soft'],
    probability: 0.85,
    solution: 'Fren balatalarını değiştirin. Fren disklerini kontrol edin.',
    urgency: 'high'
  },
  {
    id: 'brake_fluid_low',
    name: 'Fren Hidroliği Az',
    description: 'Fren hidroliği seviyesi düşük',
    symptoms: ['brake_soft', 'brake_pull'],
    probability: 0.8,
    solution: 'Fren hidroliğini tamamlayın. Sızıntı kontrolü yapın.',
    urgency: 'high'
  },
  {
    id: 'brake_disc_warp',
    name: 'Fren Diski Eğri',
    description: 'Fren diskleri eğrilmiş',
    symptoms: ['brake_vibration', 'brake_pull'],
    probability: 0.7,
    solution: 'Fren disklerini torna edin veya değiştirin.',
    urgency: 'medium'
  },

  // Şanzıman
  {
    id: 'clutch_wear',
    name: 'Debriyaj Aşınması',
    description: 'Debriyaj balatası aşınmış',
    symptoms: ['clutch_slip', 'transmission_slip'],
    probability: 0.8,
    solution: 'Debriyaj balatasını değiştirin. Debriyaj diski kontrolü yapın.',
    urgency: 'medium'
  },
  {
    id: 'transmission_fluid_low',
    name: 'Şanzıman Yağı Az',
    description: 'Şanzıman yağı seviyesi düşük',
    symptoms: ['transmission_slip', 'transmission_noise'],
    probability: 0.75,
    solution: 'Şanzıman yağını kontrol edin ve gerekirse ekleyin.',
    urgency: 'medium'
  },

  // Süspansiyon
  {
    id: 'shock_absorber_wear',
    name: 'Amortisör Aşınması',
    description: 'Amortisörler aşınmış',
    symptoms: ['suspension_noise', 'car_bouncing', 'steering_wheel_vibration'],
    probability: 0.8,
    solution: 'Amortisörleri kontrol edin ve gerekirse değiştirin.',
    urgency: 'medium'
  },
  {
    id: 'wheel_alignment',
    name: 'Balans Ayarı',
    description: 'Tekerlek balansı bozuk',
    symptoms: ['steering_wheel_vibration', 'car_bouncing'],
    probability: 0.7,
    solution: 'Tekerlek balansı yaptırın. Rot balansı kontrolü yapın.',
    urgency: 'low'
  },

  // Klima Sistemi
  {
    id: 'ac_refrigerant_low',
    name: 'Klima Gazı Az',
    description: 'Klima sisteminde gaz azalmış',
    symptoms: ['ac_not_cooling', 'ac_noise'],
    probability: 0.8,
    solution: 'Klima gazını kontrol edin ve gerekirse ekleyin.',
    urgency: 'low'
  },
  {
    id: 'ac_filter_dirty',
    name: 'Klima Filtresi Kirli',
    description: 'Klima filtresi tıkanmış',
    symptoms: ['ac_strange_smell', 'ac_not_cooling'],
    probability: 0.75,
    solution: 'Klima filtresini değiştirin. Sistem temizliği yapın.',
    urgency: 'low'
  }
];
