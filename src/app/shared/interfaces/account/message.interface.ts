export interface Message {
    id: string;
    status: 'NEW' | 'Responded' | 'Read';
    subject: string;
    policyType?: string;
    effectiveDate?: string;
    sender: string;
    date: string;
    body: string;
    attachmentsCount: number;
    isNew?: boolean;
  }