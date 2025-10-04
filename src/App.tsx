import { useState, useEffect } from 'react';
import { DiagnosisResult, VehicleInfo } from './types';
import { symptoms } from './data/symptoms';
import { problems } from './data/problems';
import { DiagnosisEngine } from './utils/diagnosisEngine';
import SymptomSelector from './components/SymptomSelector';
import AdvancedVehicleSelector from './components/AdvancedVehicleSelector';
import DiagnosisResults from './components/DiagnosisResults';
import Header from './components/Header';
import StepIndicator from './components/StepIndicator';
import HomePage from './components/HomePage';
import AIChat from './components/AIChat';
import APIKeySetup from './components/APIKeySetup';
import './components/HomePage.css';
import './components/AIChat.css';
import './components/APIKeySetup.css';

function App() {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [vehicleInfo, setVehicleInfo] = useState<VehicleInfo | null>(null);
  const [diagnosisResults, setDiagnosisResults] = useState<DiagnosisResult[]>([]);
  const [diagnosisEngine, setDiagnosisEngine] = useState<DiagnosisEngine | null>(null);
  const [currentStep, setCurrentStep] = useState<'home' | 'vehicle' | 'symptoms' | 'results' | 'ai-chat' | 'api-setup'>('home');

  useEffect(() => {
    // Tanı motorunu başlat
    const engine = new DiagnosisEngine(symptoms, problems);
    setDiagnosisEngine(engine);
  }, []);

  const handleVehicleInfoSubmit = (info: VehicleInfo) => {
    setVehicleInfo(info);
    setCurrentStep('symptoms');
  };

  const handleSymptomToggle = (symptomId: string) => {
    setSelectedSymptoms(prev => {
      if (prev.includes(symptomId)) {
        return prev.filter(id => id !== symptomId);
      } else {
        return [...prev, symptomId];
      }
    });
  };

  const handleDiagnose = () => {
    if (diagnosisEngine && selectedSymptoms.length > 0) {
      const results = diagnosisEngine.diagnose(selectedSymptoms, vehicleInfo || undefined);
      setDiagnosisResults(results);
      setCurrentStep('results');
    }
  };

  const handleReset = () => {
    setSelectedSymptoms([]);
    setVehicleInfo(null);
    setDiagnosisResults([]);
    setCurrentStep('home');
  };

  const handleGetStarted = () => {
    setCurrentStep('vehicle');
  };

  const handleAIChat = () => {
    // API anahtarı kontrolü
    const apiKey = (import.meta as any).env?.VITE_OPENAI_API_KEY;
    if (!apiKey || apiKey === 'your_openai_api_key_here') {
      setCurrentStep('api-setup');
    } else {
      setCurrentStep('ai-chat');
    }
  };

  const handleBackToSymptoms = () => {
    setCurrentStep('symptoms');
  };

  return (
    <div className="container">
      {currentStep === 'home' ? (
        <HomePage onGetStarted={handleGetStarted} onAIChat={handleAIChat} />
      ) : currentStep === 'ai-chat' ? (
        <AIChat onBack={() => setCurrentStep('home')} vehicleInfo={vehicleInfo} />
      ) : currentStep === 'api-setup' ? (
        <APIKeySetup onBack={() => setCurrentStep('home')} />
      ) : (
        <>
          <Header />
          <StepIndicator currentStep={currentStep} />
          
          {currentStep === 'vehicle' && (
            <AdvancedVehicleSelector onSubmit={handleVehicleInfoSubmit} />
          )}

          {currentStep === 'symptoms' && (
            <SymptomSelector
              symptoms={symptoms}
              selectedSymptoms={selectedSymptoms}
              onSymptomToggle={handleSymptomToggle}
              onDiagnose={handleDiagnose}
              onBack={() => setCurrentStep('vehicle')}
              canDiagnose={selectedSymptoms.length > 0}
            />
          )}

          {currentStep === 'results' && (
            <DiagnosisResults
              results={diagnosisResults}
              vehicleInfo={vehicleInfo}
              onReset={handleReset}
              onBackToSymptoms={handleBackToSymptoms}
            />
          )}
        </>
      )}
    </div>
  );
}

export default App;
