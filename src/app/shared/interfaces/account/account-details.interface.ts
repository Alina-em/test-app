export interface GeneralAccountInfo {
  accountName: string;
  accountNumber: string;
  industry: string;
  broker: string;
  underwriter: string;
  renewalDate: string;
  logoPath: string;
  addressLine1: string;
  addressLine2: string;
  existingAccountNum: string; 
}

export interface KeyAccountMetrics {
  premium: number;
  lossRatio: number;
  winnability: string;
}

export interface AccountDetails {
  general: GeneralAccountInfo;
  metrics: KeyAccountMetrics;
}