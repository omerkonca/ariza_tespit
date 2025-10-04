export interface Symptom {
  id: string;
  name: string;
  description: string;
  category: string;
}

export interface Problem {
  id: string;
  name: string;
  description: string;
  symptoms: string[];
  probability: number;
  solution: string;
  urgency: 'low' | 'medium' | 'high' | 'critical';
}

export interface DiagnosisResult {
  problem: Problem;
  confidence: number;
  matchingSymptoms: string[];
}

export interface VehicleInfo {
  brandId: string;
  brandName: string;
  modelId: string;
  modelName: string;
  engineId: string;
  engineName: string;
  transmissionId: string;
  transmissionName: string;
  year: number;
  mileage: number;
  fuelType: 'gasoline' | 'diesel' | 'hybrid' | 'electric';
}
