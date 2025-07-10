export interface Policy {
    policyNumber: string;
    type: string;
    premium: number;
    startDate: string;
    endDate: string;
    status: 'Active' | 'Expired' | 'Pending';
    iconPath: string;
  }