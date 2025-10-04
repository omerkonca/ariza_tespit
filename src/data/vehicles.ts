export interface VehicleModel {
  id: string;
  name: string;
  engines: EngineOption[];
  transmissions: TransmissionOption[];
  years: number[];
}

export interface EngineOption {
  id: string;
  name: string;
  displacement: string;
  fuelType: 'gasoline' | 'diesel' | 'hybrid' | 'electric';
  power: string;
}

export interface TransmissionOption {
  id: string;
  name: string;
  type: 'manual' | 'automatic' | 'cvt' | 'semi-automatic';
}

export interface VehicleBrand {
  id: string;
  name: string;
  models: VehicleModel[];
}

export const vehicleBrands: VehicleBrand[] = [
  // TOYOTA
  {
    id: 'toyota',
    name: 'Toyota',
    models: [
      {
        id: 'corolla',
        name: 'Corolla',
        engines: [
          { id: '1.6_132', name: '1.6 132 HP', displacement: '1.6L', fuelType: 'gasoline', power: '132 HP' },
          { id: '1.8_140', name: '1.8 140 HP', displacement: '1.8L', fuelType: 'gasoline', power: '140 HP' },
          { id: '2.0_169', name: '2.0 169 HP', displacement: '2.0L', fuelType: 'gasoline', power: '169 HP' },
          { id: 'hybrid_122', name: 'Hybrid 122 HP', displacement: '1.8L', fuelType: 'hybrid', power: '122 HP' }
        ],
        transmissions: [
          { id: 'manual_6', name: '6 İleri Manuel', type: 'manual' },
          { id: 'cvt', name: 'CVT', type: 'cvt' }
        ],
        years: [2018, 2019, 2020, 2021, 2022, 2023, 2024]
      },
      {
        id: 'camry',
        name: 'Camry',
        engines: [
          { id: '2.5_203', name: '2.5 203 HP', displacement: '2.5L', fuelType: 'gasoline', power: '203 HP' },
          { id: '3.5_301', name: '3.5 301 HP', displacement: '3.5L', fuelType: 'gasoline', power: '301 HP' },
          { id: 'hybrid_208', name: 'Hybrid 208 HP', displacement: '2.5L', fuelType: 'hybrid', power: '208 HP' }
        ],
        transmissions: [
          { id: 'automatic_8', name: '8 İleri Otomatik', type: 'automatic' },
          { id: 'cvt', name: 'CVT', type: 'cvt' }
        ],
        years: [2018, 2019, 2020, 2021, 2022, 2023, 2024]
      },
      {
        id: 'rav4',
        name: 'RAV4',
        engines: [
          { id: '2.0_150', name: '2.0 150 HP', displacement: '2.0L', fuelType: 'gasoline', power: '150 HP' },
          { id: '2.5_203', name: '2.5 203 HP', displacement: '2.5L', fuelType: 'gasoline', power: '203 HP' },
          { id: 'hybrid_219', name: 'Hybrid 219 HP', displacement: '2.5L', fuelType: 'hybrid', power: '219 HP' }
        ],
        transmissions: [
          { id: 'manual_6', name: '6 İleri Manuel', type: 'manual' },
          { id: 'cvt', name: 'CVT', type: 'cvt' }
        ],
        years: [2018, 2019, 2020, 2021, 2022, 2023, 2024]
      },
      {
        id: 'yaris',
        name: 'Yaris',
        engines: [
          { id: '1.0_100', name: '1.0 100 HP', displacement: '1.0L', fuelType: 'gasoline', power: '100 HP' },
          { id: '1.5_116', name: '1.5 116 HP', displacement: '1.5L', fuelType: 'gasoline', power: '116 HP' },
          { id: 'hybrid_116', name: 'Hybrid 116 HP', displacement: '1.5L', fuelType: 'hybrid', power: '116 HP' }
        ],
        transmissions: [
          { id: 'manual_5', name: '5 İleri Manuel', type: 'manual' },
          { id: 'cvt', name: 'CVT', type: 'cvt' }
        ],
        years: [2018, 2019, 2020, 2021, 2022, 2023, 2024]
      }
    ]
  },

  // BMW
  {
    id: 'bmw',
    name: 'BMW',
    models: [
      {
        id: 'x5',
        name: 'X5',
        engines: [
          { id: '2.0_245', name: '2.0 245 HP', displacement: '2.0L', fuelType: 'gasoline', power: '245 HP' },
          { id: '3.0_340', name: '3.0 340 HP', displacement: '3.0L', fuelType: 'gasoline', power: '340 HP' },
          { id: 'diesel_265', name: '3.0 Diesel 265 HP', displacement: '3.0L', fuelType: 'diesel', power: '265 HP' },
          { id: 'hybrid_394', name: 'Hybrid 394 HP', displacement: '3.0L', fuelType: 'hybrid', power: '394 HP' }
        ],
        transmissions: [
          { id: 'automatic_8', name: '8 İleri Otomatik', type: 'automatic' },
          { id: 'manual_6', name: '6 İleri Manuel', type: 'manual' }
        ],
        years: [2018, 2019, 2020, 2021, 2022, 2023, 2024]
      },
      {
        id: '3_series',
        name: '3 Serisi',
        engines: [
          { id: '2.0_184', name: '2.0 184 HP', displacement: '2.0L', fuelType: 'gasoline', power: '184 HP' },
          { id: '2.0_255', name: '2.0 255 HP', displacement: '2.0L', fuelType: 'gasoline', power: '255 HP' },
          { id: 'diesel_194', name: '2.0 Diesel 194 HP', displacement: '2.0L', fuelType: 'diesel', power: '194 HP' }
        ],
        transmissions: [
          { id: 'automatic_8', name: '8 İleri Otomatik', type: 'automatic' },
          { id: 'manual_6', name: '6 İleri Manuel', type: 'manual' }
        ],
        years: [2018, 2019, 2020, 2021, 2022, 2023, 2024]
      },
      {
        id: 'x3',
        name: 'X3',
        engines: [
          { id: '2.0_184', name: '2.0 184 HP', displacement: '2.0L', fuelType: 'gasoline', power: '184 HP' },
          { id: '2.0_252', name: '2.0 252 HP', displacement: '2.0L', fuelType: 'gasoline', power: '252 HP' },
          { id: 'diesel_190', name: '2.0 Diesel 190 HP', displacement: '2.0L', fuelType: 'diesel', power: '190 HP' }
        ],
        transmissions: [
          { id: 'automatic_8', name: '8 İleri Otomatik', type: 'automatic' },
          { id: 'manual_6', name: '6 İleri Manuel', type: 'manual' }
        ],
        years: [2018, 2019, 2020, 2021, 2022, 2023, 2024]
      }
    ]
  },

  // MERCEDES-BENZ
  {
    id: 'mercedes',
    name: 'Mercedes-Benz',
    models: [
      {
        id: 'c_class',
        name: 'C Serisi',
        engines: [
          { id: '1.5_184', name: '1.5 184 HP', displacement: '1.5L', fuelType: 'gasoline', power: '184 HP' },
          { id: '2.0_255', name: '2.0 255 HP', displacement: '2.0L', fuelType: 'gasoline', power: '255 HP' },
          { id: 'diesel_194', name: '2.0 Diesel 194 HP', displacement: '2.0L', fuelType: 'diesel', power: '194 HP' }
        ],
        transmissions: [
          { id: 'automatic_9', name: '9 İleri Otomatik', type: 'automatic' },
          { id: 'manual_6', name: '6 İleri Manuel', type: 'manual' }
        ],
        years: [2018, 2019, 2020, 2021, 2022, 2023, 2024]
      },
      {
        id: 'e_class',
        name: 'E Serisi',
        engines: [
          { id: '2.0_197', name: '2.0 197 HP', displacement: '2.0L', fuelType: 'gasoline', power: '197 HP' },
          { id: 'diesel_194', name: '2.0 Diesel 194 HP', displacement: '2.0L', fuelType: 'diesel', power: '194 HP' },
          { id: 'hybrid_320', name: 'Hybrid 320 HP', displacement: '2.0L', fuelType: 'hybrid', power: '320 HP' }
        ],
        transmissions: [
          { id: 'automatic_9', name: '9 İleri Otomatik', type: 'automatic' }
        ],
        years: [2018, 2019, 2020, 2021, 2022, 2023, 2024]
      },
      {
        id: 'gla',
        name: 'GLA',
        engines: [
          { id: '1.3_163', name: '1.3 163 HP', displacement: '1.3L', fuelType: 'gasoline', power: '163 HP' },
          { id: '2.0_224', name: '2.0 224 HP', displacement: '2.0L', fuelType: 'gasoline', power: '224 HP' },
          { id: 'diesel_150', name: '2.0 Diesel 150 HP', displacement: '2.0L', fuelType: 'diesel', power: '150 HP' }
        ],
        transmissions: [
          { id: 'automatic_7', name: '7 İleri Otomatik', type: 'automatic' },
          { id: 'manual_6', name: '6 İleri Manuel', type: 'manual' }
        ],
        years: [2018, 2019, 2020, 2021, 2022, 2023, 2024]
      }
    ]
  },

  // AUDI
  {
    id: 'audi',
    name: 'Audi',
    models: [
      {
        id: 'a4',
        name: 'A4',
        engines: [
          { id: '1.4_150', name: '1.4 150 HP', displacement: '1.4L', fuelType: 'gasoline', power: '150 HP' },
          { id: '2.0_190', name: '2.0 190 HP', displacement: '2.0L', fuelType: 'gasoline', power: '190 HP' },
          { id: 'diesel_150', name: '2.0 Diesel 150 HP', displacement: '2.0L', fuelType: 'diesel', power: '150 HP' }
        ],
        transmissions: [
          { id: 'manual_6', name: '6 İleri Manuel', type: 'manual' },
          { id: 'automatic_7', name: '7 İleri Otomatik', type: 'automatic' }
        ],
        years: [2018, 2019, 2020, 2021, 2022, 2023, 2024]
      },
      {
        id: 'q5',
        name: 'Q5',
        engines: [
          { id: '2.0_252', name: '2.0 252 HP', displacement: '2.0L', fuelType: 'gasoline', power: '252 HP' },
          { id: '3.0_354', name: '3.0 354 HP', displacement: '3.0L', fuelType: 'gasoline', power: '354 HP' },
          { id: 'diesel_231', name: '3.0 Diesel 231 HP', displacement: '3.0L', fuelType: 'diesel', power: '231 HP' }
        ],
        transmissions: [
          { id: 'automatic_8', name: '8 İleri Otomatik', type: 'automatic' }
        ],
        years: [2018, 2019, 2020, 2021, 2022, 2023, 2024]
      },
      {
        id: 'a3',
        name: 'A3',
        engines: [
          { id: '1.0_110', name: '1.0 110 HP', displacement: '1.0L', fuelType: 'gasoline', power: '110 HP' },
          { id: '1.5_150', name: '1.5 150 HP', displacement: '1.5L', fuelType: 'gasoline', power: '150 HP' },
          { id: 'diesel_116', name: '2.0 Diesel 116 HP', displacement: '2.0L', fuelType: 'diesel', power: '116 HP' }
        ],
        transmissions: [
          { id: 'manual_6', name: '6 İleri Manuel', type: 'manual' },
          { id: 'automatic_7', name: '7 İleri Otomatik', type: 'automatic' }
        ],
        years: [2018, 2019, 2020, 2021, 2022, 2023, 2024]
      }
    ]
  },

  // VOLKSWAGEN
  {
    id: 'volkswagen',
    name: 'Volkswagen',
    models: [
      {
        id: 'golf',
        name: 'Golf',
        engines: [
          { id: '1.0_110', name: '1.0 110 HP', displacement: '1.0L', fuelType: 'gasoline', power: '110 HP' },
          { id: '1.5_150', name: '1.5 150 HP', displacement: '1.5L', fuelType: 'gasoline', power: '150 HP' },
          { id: 'diesel_150', name: '2.0 Diesel 150 HP', displacement: '2.0L', fuelType: 'diesel', power: '150 HP' }
        ],
        transmissions: [
          { id: 'manual_6', name: '6 İleri Manuel', type: 'manual' },
          { id: 'automatic_7', name: '7 İleri Otomatik', type: 'automatic' }
        ],
        years: [2018, 2019, 2020, 2021, 2022, 2023, 2024]
      },
      {
        id: 'passat',
        name: 'Passat',
        engines: [
          { id: '1.4_150', name: '1.4 150 HP', displacement: '1.4L', fuelType: 'gasoline', power: '150 HP' },
          { id: '2.0_190', name: '2.0 190 HP', displacement: '2.0L', fuelType: 'gasoline', power: '190 HP' },
          { id: 'diesel_150', name: '2.0 Diesel 150 HP', displacement: '2.0L', fuelType: 'diesel', power: '150 HP' }
        ],
        transmissions: [
          { id: 'manual_6', name: '6 İleri Manuel', type: 'manual' },
          { id: 'automatic_7', name: '7 İleri Otomatik', type: 'automatic' }
        ],
        years: [2018, 2019, 2020, 2021, 2022, 2023, 2024]
      },
      {
        id: 'tiguan',
        name: 'Tiguan',
        engines: [
          { id: '1.4_150', name: '1.4 150 HP', displacement: '1.4L', fuelType: 'gasoline', power: '150 HP' },
          { id: '2.0_190', name: '2.0 190 HP', displacement: '2.0L', fuelType: 'gasoline', power: '190 HP' },
          { id: 'diesel_150', name: '2.0 Diesel 150 HP', displacement: '2.0L', fuelType: 'diesel', power: '150 HP' }
        ],
        transmissions: [
          { id: 'manual_6', name: '6 İleri Manuel', type: 'manual' },
          { id: 'automatic_7', name: '7 İleri Otomatik', type: 'automatic' }
        ],
        years: [2018, 2019, 2020, 2021, 2022, 2023, 2024]
      }
    ]
  },

  // FORD
  {
    id: 'ford',
    name: 'Ford',
    models: [
      {
        id: 'focus',
        name: 'Focus',
        engines: [
          { id: '1.0_125', name: '1.0 125 HP', displacement: '1.0L', fuelType: 'gasoline', power: '125 HP' },
          { id: '1.5_150', name: '1.5 150 HP', displacement: '1.5L', fuelType: 'gasoline', power: '150 HP' },
          { id: 'diesel_120', name: '1.5 Diesel 120 HP', displacement: '1.5L', fuelType: 'diesel', power: '120 HP' }
        ],
        transmissions: [
          { id: 'manual_6', name: '6 İleri Manuel', type: 'manual' },
          { id: 'automatic_8', name: '8 İleri Otomatik', type: 'automatic' }
        ],
        years: [2018, 2019, 2020, 2021, 2022, 2023, 2024]
      },
      {
        id: 'kuga',
        name: 'Kuga',
        engines: [
          { id: '1.5_150', name: '1.5 150 HP', displacement: '1.5L', fuelType: 'gasoline', power: '150 HP' },
          { id: '2.0_190', name: '2.0 190 HP', displacement: '2.0L', fuelType: 'gasoline', power: '190 HP' },
          { id: 'diesel_150', name: '2.0 Diesel 150 HP', displacement: '2.0L', fuelType: 'diesel', power: '150 HP' }
        ],
        transmissions: [
          { id: 'manual_6', name: '6 İleri Manuel', type: 'manual' },
          { id: 'automatic_8', name: '8 İleri Otomatik', type: 'automatic' }
        ],
        years: [2018, 2019, 2020, 2021, 2022, 2023, 2024]
      }
    ]
  },

  // HYUNDAI
  {
    id: 'hyundai',
    name: 'Hyundai',
    models: [
      {
        id: 'i20',
        name: 'i20',
        engines: [
          { id: '1.0_100', name: '1.0 100 HP', displacement: '1.0L', fuelType: 'gasoline', power: '100 HP' },
          { id: '1.2_84', name: '1.2 84 HP', displacement: '1.2L', fuelType: 'gasoline', power: '84 HP' }
        ],
        transmissions: [
          { id: 'manual_5', name: '5 İleri Manuel', type: 'manual' },
          { id: 'cvt', name: 'CVT', type: 'cvt' }
        ],
        years: [2018, 2019, 2020, 2021, 2022, 2023, 2024]
      },
      {
        id: 'tucson',
        name: 'Tucson',
        engines: [
          { id: '1.6_150', name: '1.6 150 HP', displacement: '1.6L', fuelType: 'gasoline', power: '150 HP' },
          { id: '2.0_185', name: '2.0 185 HP', displacement: '2.0L', fuelType: 'gasoline', power: '185 HP' },
          { id: 'diesel_136', name: '1.6 Diesel 136 HP', displacement: '1.6L', fuelType: 'diesel', power: '136 HP' }
        ],
        transmissions: [
          { id: 'manual_6', name: '6 İleri Manuel', type: 'manual' },
          { id: 'automatic_7', name: '7 İleri Otomatik', type: 'automatic' }
        ],
        years: [2018, 2019, 2020, 2021, 2022, 2023, 2024]
      },
      {
        id: 'elantra',
        name: 'Elantra',
        engines: [
          { id: '1.6_132', name: '1.6 132 HP', displacement: '1.6L', fuelType: 'gasoline', power: '132 HP' },
          { id: '2.0_149', name: '2.0 149 HP', displacement: '2.0L', fuelType: 'gasoline', power: '149 HP' }
        ],
        transmissions: [
          { id: 'manual_6', name: '6 İleri Manuel', type: 'manual' },
          { id: 'cvt', name: 'CVT', type: 'cvt' }
        ],
        years: [2018, 2019, 2020, 2021, 2022, 2023, 2024]
      }
    ]
  },

  // KIA
  {
    id: 'kia',
    name: 'Kia',
    models: [
      {
        id: 'cee_d',
        name: 'Cee\'d',
        engines: [
          { id: '1.0_120', name: '1.0 120 HP', displacement: '1.0L', fuelType: 'gasoline', power: '120 HP' },
          { id: '1.4_140', name: '1.4 140 HP', displacement: '1.4L', fuelType: 'gasoline', power: '140 HP' }
        ],
        transmissions: [
          { id: 'manual_6', name: '6 İleri Manuel', type: 'manual' },
          { id: 'automatic_7', name: '7 İleri Otomatik', type: 'automatic' }
        ],
        years: [2018, 2019, 2020, 2021, 2022, 2023, 2024]
      },
      {
        id: 'sportage',
        name: 'Sportage',
        engines: [
          { id: '1.6_132', name: '1.6 132 HP', displacement: '1.6L', fuelType: 'gasoline', power: '132 HP' },
          { id: '2.0_185', name: '2.0 185 HP', displacement: '2.0L', fuelType: 'gasoline', power: '185 HP' },
          { id: 'diesel_136', name: '1.6 Diesel 136 HP', displacement: '1.6L', fuelType: 'diesel', power: '136 HP' }
        ],
        transmissions: [
          { id: 'manual_6', name: '6 İleri Manuel', type: 'manual' },
          { id: 'automatic_7', name: '7 İleri Otomatik', type: 'automatic' }
        ],
        years: [2018, 2019, 2020, 2021, 2022, 2023, 2024]
      }
    ]
  },

  // RENAULT
  {
    id: 'renault',
    name: 'Renault',
    models: [
      {
        id: 'clio',
        name: 'Clio',
        engines: [
          { id: '1.0_100', name: '1.0 100 HP', displacement: '1.0L', fuelType: 'gasoline', power: '100 HP' },
          { id: '1.3_130', name: '1.3 130 HP', displacement: '1.3L', fuelType: 'gasoline', power: '130 HP' }
        ],
        transmissions: [
          { id: 'manual_5', name: '5 İleri Manuel', type: 'manual' },
          { id: 'cvt', name: 'CVT', type: 'cvt' }
        ],
        years: [2018, 2019, 2020, 2021, 2022, 2023, 2024]
      },
      {
        id: 'megane',
        name: 'Megane',
        engines: [
          { id: '1.2_130', name: '1.2 130 HP', displacement: '1.2L', fuelType: 'gasoline', power: '130 HP' },
          { id: '1.6_140', name: '1.6 140 HP', displacement: '1.6L', fuelType: 'gasoline', power: '140 HP' },
          { id: 'diesel_115', name: '1.5 Diesel 115 HP', displacement: '1.5L', fuelType: 'diesel', power: '115 HP' }
        ],
        transmissions: [
          { id: 'manual_6', name: '6 İleri Manuel', type: 'manual' },
          { id: 'cvt', name: 'CVT', type: 'cvt' }
        ],
        years: [2018, 2019, 2020, 2021, 2022, 2023, 2024]
      }
    ]
  },

  // OPEL
  {
    id: 'opel',
    name: 'Opel',
    models: [
      {
        id: 'corsa',
        name: 'Corsa',
        engines: [
          { id: '1.2_100', name: '1.2 100 HP', displacement: '1.2L', fuelType: 'gasoline', power: '100 HP' },
          { id: '1.4_130', name: '1.4 130 HP', displacement: '1.4L', fuelType: 'gasoline', power: '130 HP' }
        ],
        transmissions: [
          { id: 'manual_5', name: '5 İleri Manuel', type: 'manual' },
          { id: 'cvt', name: 'CVT', type: 'cvt' }
        ],
        years: [2018, 2019, 2020, 2021, 2022, 2023, 2024]
      },
      {
        id: 'astra',
        name: 'Astra',
        engines: [
          { id: '1.2_110', name: '1.2 110 HP', displacement: '1.2L', fuelType: 'gasoline', power: '110 HP' },
          { id: '1.4_150', name: '1.4 150 HP', displacement: '1.4L', fuelType: 'gasoline', power: '150 HP' },
          { id: 'diesel_110', name: '1.6 Diesel 110 HP', displacement: '1.6L', fuelType: 'diesel', power: '110 HP' }
        ],
        transmissions: [
          { id: 'manual_6', name: '6 İleri Manuel', type: 'manual' },
          { id: 'cvt', name: 'CVT', type: 'cvt' }
        ],
        years: [2018, 2019, 2020, 2021, 2022, 2023, 2024]
      }
    ]
  },

  // FIAT
  {
    id: 'fiat',
    name: 'Fiat',
    models: [
      {
        id: 'punto',
        name: 'Punto',
        engines: [
          { id: '1.2_69', name: '1.2 69 HP', displacement: '1.2L', fuelType: 'gasoline', power: '69 HP' },
          { id: '1.4_95', name: '1.4 95 HP', displacement: '1.4L', fuelType: 'gasoline', power: '95 HP' }
        ],
        transmissions: [
          { id: 'manual_5', name: '5 İleri Manuel', type: 'manual' },
          { id: 'automatic_6', name: '6 İleri Otomatik', type: 'automatic' }
        ],
        years: [2018, 2019, 2020, 2021, 2022, 2023, 2024]
      },
      {
        id: 'tipo',
        name: 'Tipo',
        engines: [
          { id: '1.4_95', name: '1.4 95 HP', displacement: '1.4L', fuelType: 'gasoline', power: '95 HP' },
          { id: '1.6_110', name: '1.6 110 HP', displacement: '1.6L', fuelType: 'gasoline', power: '110 HP' },
          { id: 'diesel_95', name: '1.6 Diesel 95 HP', displacement: '1.6L', fuelType: 'diesel', power: '95 HP' }
        ],
        transmissions: [
          { id: 'manual_5', name: '5 İleri Manuel', type: 'manual' },
          { id: 'automatic_6', name: '6 İleri Otomatik', type: 'automatic' }
        ],
        years: [2018, 2019, 2020, 2021, 2022, 2023, 2024]
      }
    ]
  },

  // PEUGEOT
  {
    id: 'peugeot',
    name: 'Peugeot',
    models: [
      {
        id: '208',
        name: '208',
        engines: [
          { id: '1.2_100', name: '1.2 100 HP', displacement: '1.2L', fuelType: 'gasoline', power: '100 HP' },
          { id: '1.6_130', name: '1.6 130 HP', displacement: '1.6L', fuelType: 'gasoline', power: '130 HP' }
        ],
        transmissions: [
          { id: 'manual_5', name: '5 İleri Manuel', type: 'manual' },
          { id: 'automatic_6', name: '6 İleri Otomatik', type: 'automatic' }
        ],
        years: [2018, 2019, 2020, 2021, 2022, 2023, 2024]
      },
      {
        id: '308',
        name: '308',
        engines: [
          { id: '1.2_130', name: '1.2 130 HP', displacement: '1.2L', fuelType: 'gasoline', power: '130 HP' },
          { id: '1.6_165', name: '1.6 165 HP', displacement: '1.6L', fuelType: 'gasoline', power: '165 HP' },
          { id: 'diesel_130', name: '1.5 Diesel 130 HP', displacement: '1.5L', fuelType: 'diesel', power: '130 HP' }
        ],
        transmissions: [
          { id: 'manual_6', name: '6 İleri Manuel', type: 'manual' },
          { id: 'automatic_8', name: '8 İleri Otomatik', type: 'automatic' }
        ],
        years: [2018, 2019, 2020, 2021, 2022, 2023, 2024]
      }
    ]
  },

  // SKODA
  {
    id: 'skoda',
    name: 'Skoda',
    models: [
      {
        id: 'fabia',
        name: 'Fabia',
        engines: [
          { id: '1.0_95', name: '1.0 95 HP', displacement: '1.0L', fuelType: 'gasoline', power: '95 HP' },
          { id: '1.2_110', name: '1.2 110 HP', displacement: '1.2L', fuelType: 'gasoline', power: '110 HP' }
        ],
        transmissions: [
          { id: 'manual_5', name: '5 İleri Manuel', type: 'manual' },
          { id: 'automatic_6', name: '6 İleri Otomatik', type: 'automatic' }
        ],
        years: [2018, 2019, 2020, 2021, 2022, 2023, 2024]
      },
      {
        id: 'octavia',
        name: 'Octavia',
        engines: [
          { id: '1.0_115', name: '1.0 115 HP', displacement: '1.0L', fuelType: 'gasoline', power: '115 HP' },
          { id: '1.5_150', name: '1.5 150 HP', displacement: '1.5L', fuelType: 'gasoline', power: '150 HP' },
          { id: 'diesel_150', name: '2.0 Diesel 150 HP', displacement: '2.0L', fuelType: 'diesel', power: '150 HP' }
        ],
        transmissions: [
          { id: 'manual_6', name: '6 İleri Manuel', type: 'manual' },
          { id: 'automatic_7', name: '7 İleri Otomatik', type: 'automatic' }
        ],
        years: [2018, 2019, 2020, 2021, 2022, 2023, 2024]
      }
    ]
  },

  // NISSAN
  {
    id: 'nissan',
    name: 'Nissan',
    models: [
      {
        id: 'micra',
        name: 'Micra',
        engines: [
          { id: '1.0_100', name: '1.0 100 HP', displacement: '1.0L', fuelType: 'gasoline', power: '100 HP' },
          { id: '1.2_90', name: '1.2 90 HP', displacement: '1.2L', fuelType: 'gasoline', power: '90 HP' }
        ],
        transmissions: [
          { id: 'manual_5', name: '5 İleri Manuel', type: 'manual' },
          { id: 'cvt', name: 'CVT', type: 'cvt' }
        ],
        years: [2018, 2019, 2020, 2021, 2022, 2023, 2024]
      },
      {
        id: 'qashqai',
        name: 'Qashqai',
        engines: [
          { id: '1.3_140', name: '1.3 140 HP', displacement: '1.3L', fuelType: 'gasoline', power: '140 HP' },
          { id: '1.6_163', name: '1.6 163 HP', displacement: '1.6L', fuelType: 'gasoline', power: '163 HP' },
          { id: 'diesel_150', name: '1.7 Diesel 150 HP', displacement: '1.7L', fuelType: 'diesel', power: '150 HP' }
        ],
        transmissions: [
          { id: 'manual_6', name: '6 İleri Manuel', type: 'manual' },
          { id: 'cvt', name: 'CVT', type: 'cvt' }
        ],
        years: [2018, 2019, 2020, 2021, 2022, 2023, 2024]
      }
    ]
  },

  // HONDA
  {
    id: 'honda',
    name: 'Honda',
    models: [
      {
        id: 'civic',
        name: 'Civic',
        engines: [
          { id: '1.0_129', name: '1.0 129 HP', displacement: '1.0L', fuelType: 'gasoline', power: '129 HP' },
          { id: '1.5_182', name: '1.5 182 HP', displacement: '1.5L', fuelType: 'gasoline', power: '182 HP' }
        ],
        transmissions: [
          { id: 'manual_6', name: '6 İleri Manuel', type: 'manual' },
          { id: 'cvt', name: 'CVT', type: 'cvt' }
        ],
        years: [2018, 2019, 2020, 2021, 2022, 2023, 2024]
      },
      {
        id: 'hr_v',
        name: 'HR-V',
        engines: [
          { id: '1.5_131', name: '1.5 131 HP', displacement: '1.5L', fuelType: 'gasoline', power: '131 HP' },
          { id: 'hybrid_131', name: 'Hybrid 131 HP', displacement: '1.5L', fuelType: 'hybrid', power: '131 HP' }
        ],
        transmissions: [
          { id: 'manual_6', name: '6 İleri Manuel', type: 'manual' },
          { id: 'cvt', name: 'CVT', type: 'cvt' }
        ],
        years: [2018, 2019, 2020, 2021, 2022, 2023, 2024]
      }
    ]
  },

  // MAZDA
  {
    id: 'mazda',
    name: 'Mazda',
    models: [
      {
        id: 'mazda3',
        name: 'Mazda3',
        engines: [
          { id: '1.5_120', name: '1.5 120 HP', displacement: '1.5L', fuelType: 'gasoline', power: '120 HP' },
          { id: '2.0_165', name: '2.0 165 HP', displacement: '2.0L', fuelType: 'gasoline', power: '165 HP' }
        ],
        transmissions: [
          { id: 'manual_6', name: '6 İleri Manuel', type: 'manual' },
          { id: 'automatic_6', name: '6 İleri Otomatik', type: 'automatic' }
        ],
        years: [2018, 2019, 2020, 2021, 2022, 2023, 2024]
      },
      {
        id: 'cx5',
        name: 'CX-5',
        engines: [
          { id: '2.0_165', name: '2.0 165 HP', displacement: '2.0L', fuelType: 'gasoline', power: '165 HP' },
          { id: '2.5_194', name: '2.5 194 HP', displacement: '2.5L', fuelType: 'gasoline', power: '194 HP' },
          { id: 'diesel_150', name: '2.2 Diesel 150 HP', displacement: '2.2L', fuelType: 'diesel', power: '150 HP' }
        ],
        transmissions: [
          { id: 'manual_6', name: '6 İleri Manuel', type: 'manual' },
          { id: 'automatic_6', name: '6 İleri Otomatik', type: 'automatic' }
        ],
        years: [2018, 2019, 2020, 2021, 2022, 2023, 2024]
      }
    ]
  }
];