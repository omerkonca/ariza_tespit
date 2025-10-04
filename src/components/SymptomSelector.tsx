import React from 'react';
import { Symptom } from '../types';
import { AlertTriangle, ArrowLeft, Search } from 'lucide-react';

interface SymptomSelectorProps {
  symptoms: Symptom[];
  selectedSymptoms: string[];
  onSymptomToggle: (symptomId: string) => void;
  onDiagnose: () => void;
  onBack: () => void;
  canDiagnose: boolean;
}

const SymptomSelector: React.FC<SymptomSelectorProps> = ({
  symptoms,
  selectedSymptoms,
  onSymptomToggle,
  onDiagnose,
  onBack,
  canDiagnose
}) => {
  const groupedSymptoms = symptoms.reduce((acc, symptom) => {
    if (!acc[symptom.category]) {
      acc[symptom.category] = [];
    }
    acc[symptom.category].push(symptom);
    return acc;
  }, {} as { [key: string]: Symptom[] });

  const getUrgencyColor = (category: string) => {
    const urgentCategories = ['Motor', 'Fren Sistemi', 'Elektrik'];
    return urgentCategories.includes(category) ? '#ff6b6b' : '#667eea';
  };

  return (
    <div>
      <div className="card" style={{ marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
          <button onClick={onBack} className="btn" style={{ background: '#6c757d' }}>
            <ArrowLeft size={16} style={{ marginRight: '8px' }} />
            Geri
          </button>
          <h2 style={{ margin: 0 }}>Semptomları Seçin</h2>
          <div style={{ width: '100px' }}></div>
        </div>
        <p style={{ color: '#666', marginBottom: '16px' }}>
          Aracınızda yaşadığınız sorunları işaretleyin. Birden fazla seçim yapabilirsiniz.
        </p>
        <div style={{ 
          background: '#e3f2fd', 
          padding: '12px', 
          borderRadius: '8px', 
          border: '1px solid #2196f3',
          marginBottom: '16px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Search size={16} color="#2196f3" />
            <span style={{ fontWeight: '600', color: '#1976d2' }}>
              {selectedSymptoms.length} semptom seçildi
            </span>
          </div>
        </div>
      </div>

      {Object.entries(groupedSymptoms).map(([category, categorySymptoms]) => (
        <div key={category} className="card">
          <h3 style={{ 
            color: getUrgencyColor(category), 
            marginBottom: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <AlertTriangle size={20} />
            {category}
          </h3>
          <div className="grid">
            {categorySymptoms.map(symptom => (
              <div
                key={symptom.id}
                className={`symptom-item ${selectedSymptoms.includes(symptom.id) ? 'selected' : ''}`}
                onClick={() => onSymptomToggle(symptom.id)}
              >
                <h4 style={{ marginBottom: '8px', fontSize: '16px' }}>
                  {symptom.name}
                </h4>
                <p style={{ 
                  fontSize: '14px', 
                  color: '#666', 
                  lineHeight: '1.4',
                  margin: 0 
                }}>
                  {symptom.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="card" style={{ textAlign: 'center' }}>
        <button
          onClick={onDiagnose}
          className="btn"
          disabled={!canDiagnose}
          style={{
            fontSize: '18px',
            padding: '16px 32px',
            background: canDiagnose ? '#28a745' : '#ccc'
          }}
        >
          <Search size={20} style={{ marginRight: '8px' }} />
          Arıza Tespit Et
        </button>
        {!canDiagnose && (
          <p style={{ marginTop: '12px', color: '#666' }}>
            Lütfen en az bir semptom seçin
          </p>
        )}
      </div>
    </div>
  );
};

export default SymptomSelector;
