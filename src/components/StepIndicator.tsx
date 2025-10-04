import React from 'react';
import { Check } from 'lucide-react';

interface StepIndicatorProps {
  currentStep: 'vehicle' | 'symptoms' | 'results';
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ currentStep }) => {
  const steps = [
    { id: 'vehicle', label: 'Araç Seçimi', number: 1 },
    { id: 'symptoms', label: 'Semptom Seçimi', number: 2 },
    { id: 'results', label: 'Teşhis Sonuçları', number: 3 }
  ];

  const getStepStatus = (stepId: string) => {
    if (stepId === currentStep) return 'active';
    if (steps.findIndex(s => s.id === stepId) < steps.findIndex(s => s.id === currentStep)) return 'completed';
    return 'pending';
  };

  return (
    <div className="step-indicator">
      {steps.map((step) => {
        const status = getStepStatus(step.id);
        return (
          <div key={step.id} className={`step ${status}`}>
            <div className="step-number">
              {status === 'completed' ? <Check size={12} /> : step.number}
            </div>
            {step.label}
          </div>
        );
      })}
    </div>
  );
};

export default StepIndicator;
