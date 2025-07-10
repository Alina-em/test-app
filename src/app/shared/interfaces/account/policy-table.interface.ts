export interface PolicyTable {
    id: string;
    line: {
      name: string;
      icon: string;
      policyNumber: string;
    };
    effectiveDate: string;
    expirationDate: string;
    status: 'Active' | 'Pending';
    expiringTech: number;
    expiringPremium: number;
    renewalTech: number;
    renewalPremium: number;
    rateChange: number | 'N/A';
    lossRatio: number | 'N/A';
  }