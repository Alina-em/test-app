export interface WorkQueueItem {
    id: number,
    originator: string;
    initials: string;
    clientLine: string;
    type: string;
    status: 'New' | 'Pending Review' | 'Completed';
    created: string;
  }