export interface MarketIntelligenceItem {
    text: string;
    color: 'orange' | 'green' | 'red';
  }
  
  export interface MarketIntelligenceData {
    items: MarketIntelligenceItem[];
  }