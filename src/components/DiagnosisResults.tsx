import { useState } from 'react';
import { DiagnosisResult, VehicleInfo } from '../types';
import { ArrowLeft, RefreshCw, AlertTriangle, CheckCircle, Clock, Zap } from 'lucide-react';

interface DiagnosisResultsProps {
  results: DiagnosisResult[];
  vehicleInfo: VehicleInfo | null;
  onReset: () => void;
  onBackToSymptoms: () => void;
}

const DiagnosisResults: React.FC<DiagnosisResultsProps> = ({
  results,
  vehicleInfo,
  onReset,
  onBackToSymptoms
}) => {
  const [filterUrgency, setFilterUrgency] = useState<string[]>(['high', 'critical', 'medium', 'low']);

  const getUrgencyInfo = (urgency: string) => {
    switch (urgency) {
      case 'critical':
        return { color: '#dc3545', icon: AlertTriangle, text: 'Kritik', bg: '#f8d7da' };
      case 'high':
        return { color: '#fd7e14', icon: AlertTriangle, text: 'Yüksek', bg: '#fff3cd' };
      case 'medium':
        return { color: '#ffc107', icon: Clock, text: 'Orta', bg: '#fff3cd' };
      case 'low':
        return { color: '#28a745', icon: CheckCircle, text: 'Düşük', bg: '#d4edda' };
      default:
        return { color: '#6c757d', icon: Clock, text: 'Bilinmiyor', bg: '#f8f9fa' };
    }
  };

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 0.8) return '#28a745';
    if (confidence >= 0.6) return '#ffc107';
    if (confidence >= 0.4) return '#fd7e14';
    return '#dc3545';
  };

  const filteredResults = results.filter(result => 
    filterUrgency.includes(result.problem.urgency)
  );

  const topResult = results[0];

  return (
    <div>
      <div className="card" style={{ marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
          <button onClick={onBackToSymptoms} className="btn" style={{ background: '#6c757d' }}>
            <ArrowLeft size={16} style={{ marginRight: '8px' }} />
            Semptomlara Dön
          </button>
          <h2 style={{ margin: 0 }}>Teşhis Sonuçları</h2>
          <button onClick={onReset} className="btn" style={{ background: '#17a2b8' }}>
            <RefreshCw size={16} style={{ marginRight: '8px' }} />
            Yeni Teşhis
          </button>
        </div>

        {vehicleInfo && (
          <div style={{ 
            background: '#f8f9fa', 
            padding: '12px', 
            borderRadius: '8px', 
            marginBottom: '16px' 
          }}>
            <strong>Araç:</strong> {vehicleInfo.brandName} {vehicleInfo.modelName} ({vehicleInfo.year})<br />
            <strong>Motor:</strong> {vehicleInfo.engineName} - <strong>Vites:</strong> {vehicleInfo.transmissionName}<br />
            <strong>Kilometre:</strong> {vehicleInfo.mileage.toLocaleString()} km
          </div>
        )}

        <div style={{ marginBottom: '16px' }}>
          <label style={{ fontWeight: '600', marginBottom: '8px', display: 'block' }}>
            Aciliyet Filtresi:
          </label>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {['critical', 'high', 'medium', 'low'].map(urgency => {
              const info = getUrgencyInfo(urgency);
              const Icon = info.icon;
              return (
                <button
                  key={urgency}
                  onClick={() => {
                    if (filterUrgency.includes(urgency)) {
                      setFilterUrgency(prev => prev.filter(u => u !== urgency));
                    } else {
                      setFilterUrgency(prev => [...prev, urgency]);
                    }
                  }}
                  style={{
                    background: filterUrgency.includes(urgency) ? info.color : '#f8f9fa',
                    color: filterUrgency.includes(urgency) ? 'white' : info.color,
                    border: `2px solid ${info.color}`,
                    padding: '8px 12px',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '14px',
                    fontWeight: '600'
                  }}
                >
                  <Icon size={14} />
                  {info.text}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {topResult && (
        <div className="result-card" style={{ marginBottom: '20px' }}>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Zap size={24} />
            En Olası Arıza
          </h3>
          <div style={{ background: 'rgba(255,255,255,0.1)', padding: '16px', borderRadius: '8px' }}>
            <h4 style={{ fontSize: '20px', marginBottom: '8px' }}>
              {topResult.problem.name}
            </h4>
            <p style={{ marginBottom: '12px', opacity: 0.9 }}>
              {topResult.problem.description}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span style={{ fontWeight: '600' }}>Güven:</span>
                <span style={{ 
                  color: getConfidenceColor(topResult.confidence),
                  fontWeight: '600',
                  fontSize: '18px'
                }}>
                  %{Math.round(topResult.confidence * 100)}
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span style={{ fontWeight: '600' }}>Aciliyet:</span>
                <span style={{ 
                  color: getUrgencyInfo(topResult.problem.urgency).color,
                  fontWeight: '600'
                }}>
                  {getUrgencyInfo(topResult.problem.urgency).text}
                </span>
              </div>
            </div>
            <div className="solution">
              <h5 style={{ marginBottom: '8px' }}>Çözüm Önerisi:</h5>
              <p style={{ margin: 0, lineHeight: '1.5' }}>
                {topResult.problem.solution}
              </p>
            </div>
          </div>
        </div>
      )}

      {filteredResults.length > 1 && (
        <div className="card">
          <h3 style={{ marginBottom: '16px' }}>Diğer Olası Arızalar</h3>
          <div className="grid">
            {filteredResults.slice(1).map((result) => {
              const urgencyInfo = getUrgencyInfo(result.problem.urgency);
              const UrgencyIcon = urgencyInfo.icon;
              
              return (
                <div key={result.problem.id} className="card" style={{ margin: 0 }}>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'flex-start',
                    marginBottom: '12px'
                  }}>
                    <h4 style={{ margin: 0, fontSize: '16px' }}>
                      {result.problem.name}
                    </h4>
                    <div style={{ 
                      background: urgencyInfo.bg,
                      color: urgencyInfo.color,
                      padding: '4px 8px',
                      borderRadius: '4px',
                      fontSize: '12px',
                      fontWeight: '600',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}>
                      <UrgencyIcon size={12} />
                      {urgencyInfo.text}
                    </div>
                  </div>
                  
                  <p style={{ 
                    fontSize: '14px', 
                    color: '#666', 
                    marginBottom: '12px',
                    lineHeight: '1.4'
                  }}>
                    {result.problem.description}
                  </p>
                  
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    marginBottom: '12px'
                  }}>
                    <span style={{ fontSize: '14px', color: '#666' }}>
                      Güven: <strong style={{ color: getConfidenceColor(result.confidence) }}>
                        %{Math.round(result.confidence * 100)}
                      </strong>
                    </span>
                    <span style={{ fontSize: '12px', color: '#999' }}>
                      {result.matchingSymptoms.length} semptom eşleşti
                    </span>
                  </div>
                  
                  <div style={{ 
                    background: '#f8f9fa', 
                    padding: '12px', 
                    borderRadius: '6px',
                    fontSize: '14px',
                    lineHeight: '1.4'
                  }}>
                    <strong>Çözüm:</strong> {result.problem.solution}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {filteredResults.length === 0 && (
        <div className="card" style={{ textAlign: 'center' }}>
          <AlertTriangle size={48} style={{ color: '#ffc107', marginBottom: '16px' }} />
          <h3>Filtrelenen Sonuç Bulunamadı</h3>
          <p>Seçilen aciliyet seviyelerinde sonuç bulunmuyor. Filtreleri değiştirmeyi deneyin.</p>
        </div>
      )}
    </div>
  );
};

export default DiagnosisResults;
