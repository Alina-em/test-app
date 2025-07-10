export interface HistoricalTrendDataPoint {
    month: string;
    value: number;
  }
  
  export interface WinnabilitySummary {
      overallScore: number;
      winnabilitySummary: string,
      historicalTrend: HistoricalTrendDataPoint[]; 
      position: {
        yourScore: number;
        marketAverage: number;
        topCompetitor: number;
      };
    }
    
    export interface WinnabilityFactor {
      label: string;
      value: number;
    }
    
    export interface WinnabilityData {
      summary: WinnabilitySummary;
      increasingWinnability: WinnabilityFactor[];
      decreasingWinnability: WinnabilityFactor[];
    }