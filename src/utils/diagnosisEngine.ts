import { Symptom, Problem, DiagnosisResult, VehicleInfo } from '../types';

export class DiagnosisEngine {
  private symptoms: Symptom[];
  private problems: Problem[];

  constructor(symptoms: Symptom[], problems: Problem[]) {
    this.symptoms = symptoms;
    this.problems = problems;
  }

  /**
   * Seçilen semptomlara göre olası arızaları tespit eder
   */
  diagnose(selectedSymptomIds: string[], vehicleInfo?: VehicleInfo): DiagnosisResult[] {
    const results: DiagnosisResult[] = [];

    for (const problem of this.problems) {
      const matchingSymptoms = problem.symptoms.filter(symptomId => 
        selectedSymptomIds.includes(symptomId)
      );

      if (matchingSymptoms.length > 0) {
        // Temel güven skoru hesaplama
        let confidence = this.calculateConfidence(problem, matchingSymptoms, selectedSymptomIds);
        
        // Araç bilgilerine göre ayarlama
        if (vehicleInfo) {
          confidence = this.adjustConfidenceForVehicle(confidence, problem, vehicleInfo);
        }

        results.push({
          problem,
          confidence,
          matchingSymptoms
        });
      }
    }

    // Güven skoruna göre sırala
    return results.sort((a, b) => b.confidence - a.confidence);
  }

  /**
   * Temel güven skorunu hesaplar
   */
  private calculateConfidence(
    problem: Problem, 
    matchingSymptoms: string[], 
    totalSelectedSymptoms: string[]
  ): number {
    // Eşleşen semptom oranı
    const matchRatio = matchingSymptoms.length / problem.symptoms.length;
    
    // Seçilen semptomların problem semptomlarına oranı
    const coverageRatio = matchingSymptoms.length / totalSelectedSymptoms.length;
    
    // Problem olasılığı ile çarp
    const baseConfidence = problem.probability * matchRatio * coverageRatio;
    
    // Minimum %10 güven skoru
    return Math.max(baseConfidence, 0.1);
  }

  /**
   * Araç bilgilerine göre güven skorunu ayarlar
   */
  private adjustConfidenceForVehicle(
    confidence: number, 
    problem: Problem, 
    vehicleInfo: VehicleInfo
  ): number {
    let adjustedConfidence = confidence;

    // Yaş faktörü (eski araçlarda bazı arızalar daha olası)
    const vehicleAge = new Date().getFullYear() - vehicleInfo.year;
    
    if (vehicleAge > 10) {
      // Eski araçlarda elektrik ve motor arızaları daha olası
      if (problem.id.includes('battery') || problem.id.includes('alternator') || 
          problem.id.includes('engine') || problem.id.includes('starter')) {
        adjustedConfidence *= 1.2;
      }
    }

    // Kilometre faktörü
    if (vehicleInfo.mileage > 200000) {
      // Yüksek kilometreli araçlarda mekanik arızalar daha olası
      if (problem.id.includes('clutch') || problem.id.includes('transmission') || 
          problem.id.includes('shock') || problem.id.includes('brake')) {
        adjustedConfidence *= 1.15;
      }
    }

    // Yakıt türü faktörü
    if (vehicleInfo.fuelType === 'diesel') {
      // Dizel araçlarda bazı arızalar daha olası
      if (problem.id.includes('fuel') || problem.id.includes('engine_smoke')) {
        adjustedConfidence *= 1.1;
      }
    }

    return Math.min(adjustedConfidence, 1.0); // Maksimum %100
  }

  /**
   * Semptomları kategorilere göre gruplar
   */
  getSymptomsByCategory(): { [category: string]: Symptom[] } {
    const grouped: { [category: string]: Symptom[] } = {};
    
    this.symptoms.forEach(symptom => {
      if (!grouped[symptom.category]) {
        grouped[symptom.category] = [];
      }
      grouped[symptom.category].push(symptom);
    });

    return grouped;
  }

  /**
   * Aciliyet seviyesine göre sonuçları filtreler
   */
  filterByUrgency(results: DiagnosisResult[], urgency: string[]): DiagnosisResult[] {
    return results.filter(result => 
      urgency.includes(result.problem.urgency)
    );
  }

  /**
   * En yüksek güven skorlu sonucu döndürür
   */
  getTopResult(results: DiagnosisResult[]): DiagnosisResult | null {
    return results.length > 0 ? results[0] : null;
  }

  /**
   * Güven skoruna göre sonuçları filtreler
   */
  filterByConfidence(results: DiagnosisResult[], minConfidence: number): DiagnosisResult[] {
    return results.filter(result => result.confidence >= minConfidence);
  }
}
