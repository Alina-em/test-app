export interface PortfolioGoalsMetrics {
    portfolioLossRatioTarget: {
      percentage: string;
      progress: number;
      targetPercentage: number;
      statusText: string;
    };
    renewalRetention: {
      percentage: string;
      progress: number;
      targetPercentage: number;
      statusText: string;
    };
    newBusinessTarget: {
      amount: string;
      target: string;
      bottomPercentage: string;
      progress: number;
    };
    annualGwpTarget: {
      amount: string;
      target: string;
      bottomPercentage: string;
      progress: number;
    };
  }
  