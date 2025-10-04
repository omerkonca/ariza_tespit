import React, { useState } from 'react';
import { VehicleInfo } from '../types';
import { Car, Calendar, Gauge, Fuel } from 'lucide-react';

interface VehicleInfoFormProps {
  onSubmit: (vehicleInfo: VehicleInfo) => void;
}

const VehicleInfoForm: React.FC<VehicleInfoFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<VehicleInfo>({
    make: '',
    model: '',
    year: new Date().getFullYear(),
    mileage: 0,
    fuelType: 'gasoline'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.make && formData.model) {
      onSubmit(formData);
    }
  };

  const handleChange = (field: keyof VehicleInfo, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 30 }, (_, i) => currentYear - i);

  return (
    <div className="card">
      <div style={{ textAlign: 'center', marginBottom: '24px' }}>
        <Car size={32} style={{ marginBottom: '12px' }} />
        <h2>Araç Bilgileri</h2>
        <p>Daha doğru teşhis için araç bilgilerinizi girin</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid">
          <div className="input-group">
            <label htmlFor="make">
              <Car size={16} style={{ marginRight: '8px' }} />
              Marka
            </label>
            <input
              id="make"
              type="text"
              value={formData.make}
              onChange={(e) => handleChange('make', e.target.value)}
              placeholder="Örn: Toyota, Ford, BMW"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="model">
              <Car size={16} style={{ marginRight: '8px' }} />
              Model
            </label>
            <input
              id="model"
              type="text"
              value={formData.model}
              onChange={(e) => handleChange('model', e.target.value)}
              placeholder="Örn: Corolla, Focus, 3 Series"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="year">
              <Calendar size={16} style={{ marginRight: '8px' }} />
              Model Yılı
            </label>
            <select
              id="year"
              value={formData.year}
              onChange={(e) => handleChange('year', parseInt(e.target.value))}
            >
              {years.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>

          <div className="input-group">
            <label htmlFor="mileage">
              <Gauge size={16} style={{ marginRight: '8px' }} />
              Kilometre
            </label>
            <input
              id="mileage"
              type="number"
              value={formData.mileage}
              onChange={(e) => handleChange('mileage', parseInt(e.target.value) || 0)}
              placeholder="Örn: 150000"
              min="0"
            />
          </div>

          <div className="input-group">
            <label htmlFor="fuelType">
              <Fuel size={16} style={{ marginRight: '8px' }} />
              Yakıt Türü
            </label>
            <select
              id="fuelType"
              value={formData.fuelType}
              onChange={(e) => handleChange('fuelType', e.target.value as VehicleInfo['fuelType'])}
            >
              <option value="gasoline">Benzin</option>
              <option value="diesel">Dizel</option>
              <option value="hybrid">Hibrit</option>
              <option value="electric">Elektrik</option>
            </select>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '24px' }}>
          <button type="submit" className="btn">
            Devam Et
          </button>
        </div>
      </form>
    </div>
  );
};

export default VehicleInfoForm;
