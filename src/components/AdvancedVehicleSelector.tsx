import React, { useState, useEffect } from 'react';
import { VehicleInfo } from '../types';
import { vehicleBrands, VehicleBrand, VehicleModel, EngineOption, TransmissionOption } from '../data/vehicles';
import { Car, ChevronDown, Check } from 'lucide-react';

interface AdvancedVehicleSelectorProps {
  onSubmit: (vehicleInfo: VehicleInfo) => void;
}

const AdvancedVehicleSelector: React.FC<AdvancedVehicleSelectorProps> = ({ onSubmit }) => {
  const [selectedBrand, setSelectedBrand] = useState<VehicleBrand | null>(null);
  const [selectedModel, setSelectedModel] = useState<VehicleModel | null>(null);
  const [selectedEngine, setSelectedEngine] = useState<EngineOption | null>(null);
  const [selectedTransmission, setSelectedTransmission] = useState<TransmissionOption | null>(null);
  const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear());
  const [mileage, setMileage] = useState<number>(0);
  const [showBrands, setShowBrands] = useState(false);
  const [showModels, setShowModels] = useState(false);
  const [showEngines, setShowEngines] = useState(false);
  const [showTransmissions, setShowTransmissions] = useState(false);

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 10 }, (_, i) => currentYear - i);

  // Model seçildiğinde motor ve vites seçeneklerini sıfırla
  useEffect(() => {
    if (selectedModel) {
      setSelectedEngine(null);
      setSelectedTransmission(null);
    }
  }, [selectedModel]);

  // Marka seçildiğinde model, motor ve vites seçeneklerini sıfırla
  useEffect(() => {
    if (selectedBrand) {
      setSelectedModel(null);
      setSelectedEngine(null);
      setSelectedTransmission(null);
    }
  }, [selectedBrand]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedBrand && selectedModel && selectedEngine && selectedTransmission) {
      const vehicleInfo: VehicleInfo = {
        brandId: selectedBrand.id,
        brandName: selectedBrand.name,
        modelId: selectedModel.id,
        modelName: selectedModel.name,
        engineId: selectedEngine.id,
        engineName: selectedEngine.name,
        transmissionId: selectedTransmission.id,
        transmissionName: selectedTransmission.name,
        year: selectedYear,
        mileage,
        fuelType: selectedEngine.fuelType
      };
      onSubmit(vehicleInfo);
    }
  };

  const canProceed = selectedBrand && selectedModel && selectedEngine && selectedTransmission;

  return (
    <div className="card">
      <div style={{ textAlign: 'center', marginBottom: '24px' }}>
        <Car size={32} style={{ marginBottom: '12px' }} />
        <h2>Aracınızı Seçiniz</h2>
        <p>Daha doğru teşhis için detaylı araç bilgilerinizi girin</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
          {/* Marka Seçimi */}
          <div className="input-group">
            <label>1. Marka</label>
            <div style={{ position: 'relative' }}>
              <button
                type="button"
                onClick={() => setShowBrands(!showBrands)}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '2px solid #e1e5e9',
                  borderRadius: '8px',
                  background: 'white',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '16px'
                }}
              >
                <span>{selectedBrand ? selectedBrand.name : 'Seçiniz'}</span>
                <ChevronDown size={16} />
              </button>
              {showBrands && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  right: 0,
                  background: 'white',
                  border: '2px solid #e1e5e9',
                  borderRadius: '8px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  zIndex: 1000,
                  maxHeight: '200px',
                  overflowY: 'auto'
                }}>
                  {vehicleBrands.map(brand => (
                    <button
                      key={brand.id}
                      type="button"
                      onClick={() => {
                        setSelectedBrand(brand);
                        setShowBrands(false);
                      }}
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: 'none',
                        background: 'white',
                        cursor: 'pointer',
                        textAlign: 'left',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontSize: '16px'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.background = '#f8f9fa'}
                      onMouseLeave={(e) => e.currentTarget.style.background = 'white'}
                    >
                      {selectedBrand?.id === brand.id && <Check size={16} color="#667eea" />}
                      {brand.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Model Seçimi */}
          <div className="input-group">
            <label>2. Model</label>
            <div style={{ position: 'relative' }}>
              <button
                type="button"
                onClick={() => selectedBrand && setShowModels(!showModels)}
                disabled={!selectedBrand}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '2px solid #e1e5e9',
                  borderRadius: '8px',
                  background: selectedBrand ? 'white' : '#f8f9fa',
                  cursor: selectedBrand ? 'pointer' : 'not-allowed',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '16px',
                  color: selectedBrand ? '#333' : '#999'
                }}
              >
                <span>{selectedModel ? selectedModel.name : 'Seçiniz'}</span>
                <ChevronDown size={16} />
              </button>
              {showModels && selectedBrand && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  right: 0,
                  background: 'white',
                  border: '2px solid #e1e5e9',
                  borderRadius: '8px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  zIndex: 1000,
                  maxHeight: '200px',
                  overflowY: 'auto'
                }}>
                  {selectedBrand.models.map(model => (
                    <button
                      key={model.id}
                      type="button"
                      onClick={() => {
                        setSelectedModel(model);
                        setShowModels(false);
                      }}
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: 'none',
                        background: 'white',
                        cursor: 'pointer',
                        textAlign: 'left',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontSize: '16px'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.background = '#f8f9fa'}
                      onMouseLeave={(e) => e.currentTarget.style.background = 'white'}
                    >
                      {selectedModel?.id === model.id && <Check size={16} color="#667eea" />}
                      {model.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Motor Seçimi */}
          <div className="input-group">
            <label>3. Motor</label>
            <div style={{ position: 'relative' }}>
              <button
                type="button"
                onClick={() => selectedModel && setShowEngines(!showEngines)}
                disabled={!selectedModel}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '2px solid #e1e5e9',
                  borderRadius: '8px',
                  background: selectedModel ? 'white' : '#f8f9fa',
                  cursor: selectedModel ? 'pointer' : 'not-allowed',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '16px',
                  color: selectedModel ? '#333' : '#999'
                }}
              >
                <span>{selectedEngine ? selectedEngine.name : 'Seçiniz'}</span>
                <ChevronDown size={16} />
              </button>
              {showEngines && selectedModel && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  right: 0,
                  background: 'white',
                  border: '2px solid #e1e5e9',
                  borderRadius: '8px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  zIndex: 1000,
                  maxHeight: '200px',
                  overflowY: 'auto'
                }}>
                  {selectedModel.engines.map(engine => (
                    <button
                      key={engine.id}
                      type="button"
                      onClick={() => {
                        setSelectedEngine(engine);
                        setShowEngines(false);
                      }}
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: 'none',
                        background: 'white',
                        cursor: 'pointer',
                        textAlign: 'left',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        gap: '4px',
                        fontSize: '16px'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.background = '#f8f9fa'}
                      onMouseLeave={(e) => e.currentTarget.style.background = 'white'}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        {selectedEngine?.id === engine.id && <Check size={16} color="#667eea" />}
                        <strong>{engine.name}</strong>
                      </div>
                      <div style={{ fontSize: '14px', color: '#666' }}>
                        {engine.displacement} - {engine.power} - {engine.fuelType === 'gasoline' ? 'Benzin' : 
                         engine.fuelType === 'diesel' ? 'Dizel' : 
                         engine.fuelType === 'hybrid' ? 'Hibrit' : 'Elektrik'}
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Vites Seçimi */}
          <div className="input-group">
            <label>4. Vites</label>
            <div style={{ position: 'relative' }}>
              <button
                type="button"
                onClick={() => selectedModel && setShowTransmissions(!showTransmissions)}
                disabled={!selectedModel}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '2px solid #e1e5e9',
                  borderRadius: '8px',
                  background: selectedModel ? 'white' : '#f8f9fa',
                  cursor: selectedModel ? 'pointer' : 'not-allowed',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '16px',
                  color: selectedModel ? '#333' : '#999'
                }}
              >
                <span>{selectedTransmission ? selectedTransmission.name : 'Seçiniz'}</span>
                <ChevronDown size={16} />
              </button>
              {showTransmissions && selectedModel && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  right: 0,
                  background: 'white',
                  border: '2px solid #e1e5e9',
                  borderRadius: '8px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  zIndex: 1000,
                  maxHeight: '200px',
                  overflowY: 'auto'
                }}>
                  {selectedModel.transmissions.map(transmission => (
                    <button
                      key={transmission.id}
                      type="button"
                      onClick={() => {
                        setSelectedTransmission(transmission);
                        setShowTransmissions(false);
                      }}
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: 'none',
                        background: 'white',
                        cursor: 'pointer',
                        textAlign: 'left',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontSize: '16px'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.background = '#f8f9fa'}
                      onMouseLeave={(e) => e.currentTarget.style.background = 'white'}
                    >
                      {selectedTransmission?.id === transmission.id && <Check size={16} color="#667eea" />}
                      {transmission.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Yıl Seçimi */}
          <div className="input-group">
            <label>5. Model Yılı</label>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(parseInt(e.target.value))}
              style={{
                width: '100%',
                padding: '12px',
                border: '2px solid #e1e5e9',
                borderRadius: '8px',
                fontSize: '16px'
              }}
            >
              {years.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>

          {/* Kilometre */}
          <div className="input-group">
            <label>6. Kilometre</label>
            <input
              type="number"
              value={mileage}
              onChange={(e) => setMileage(parseInt(e.target.value) || 0)}
              placeholder="Örn: 150000"
              min="0"
              style={{
                width: '100%',
                padding: '12px',
                border: '2px solid #e1e5e9',
                borderRadius: '8px',
                fontSize: '16px'
              }}
            />
          </div>
        </div>

        {/* Seçilen Araç Özeti */}
        {canProceed && (
          <div style={{
            background: '#e8f5e8',
            border: '2px solid #4caf50',
            borderRadius: '8px',
            padding: '16px',
            marginTop: '20px'
          }}>
            <h4 style={{ margin: '0 0 8px 0', color: '#2e7d32' }}>Seçilen Araç:</h4>
            <p style={{ margin: 0, fontSize: '16px' }}>
              <strong>{selectedBrand?.name} {selectedModel?.name}</strong><br />
              {selectedEngine?.name} - {selectedTransmission?.name} - {selectedYear}<br />
              {mileage.toLocaleString()} km
            </p>
          </div>
        )}

        <div style={{ textAlign: 'center', marginTop: '24px' }}>
          <button 
            type="submit" 
            className="btn"
            disabled={!canProceed}
            style={{
              background: canProceed ? '#667eea' : '#ccc',
              cursor: canProceed ? 'pointer' : 'not-allowed'
            }}
          >
            Devam Et
          </button>
          {!canProceed && (
            <p style={{ marginTop: '12px', color: '#666', fontSize: '14px' }}>
              Lütfen tüm seçenekleri doldurun
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default AdvancedVehicleSelector;
