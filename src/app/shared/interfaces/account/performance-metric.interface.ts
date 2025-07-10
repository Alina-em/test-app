import { MetricCard } from './metric-card.interface';

export interface ExposureDistributionItem {
  category: string;
  percentage: number;
}

export interface ExposureDistributionCardData {
  items: ExposureDistributionItem[];
}


export interface PerformanceMetricsData {

  winnability: MetricCard;
  lossRatio: MetricCard;
  premiumGrowth: MetricCard;
  exposureDistribution: ExposureDistributionCardData;
}