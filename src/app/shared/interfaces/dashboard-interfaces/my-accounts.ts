export interface AccountDataItem {
  accountNameType: string,
  broker: string,
  renewalDate: string,
  premium: number,
  ratedPremium: number,
  lossRatio: number,
  appetite: 'High' | 'Medium' | 'Low' | 'Cautious',
  status: 'Active' | 'Under Review',
  triage: number, 
  winnability: 'Weak' | 'Moderate' | 'Strong' | 'Very Strong'
}