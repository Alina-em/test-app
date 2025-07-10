export interface MetricCard {
    title: string;
    mainValue: string;
    subValue?: string;
    linkText: string;
    linkUrl?: string;
    type: 'winnability' | 'lossRatio' | 'premiumGrowth';
  }