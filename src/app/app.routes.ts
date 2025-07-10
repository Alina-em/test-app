import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
          import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent),
      },
      {
        path: 'account',
        loadComponent: () =>
          import('./pages/account/account.component').then(m => m.AccountComponent),
      },
];
