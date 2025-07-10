import { Component, OnInit, signal } from '@angular/core';
import { AccountHeaderComponent } from './components/account-header/account-header.component';
import { PolicyCardsComponent } from './components/policy-cards/policy-cards.component';
import { CommunicationComponent } from './components/communication/communication.component';
import { PoliciesTableComponent } from './components/policies-table/policies-table.component';
import { PerformanceMetricsComponent } from './components/performance-metrics/performance-metrics.component';
import { AccountStatusComponent } from './components/account-status/account-status.component';
import { WinnabilityComponent } from './components/winnability/winnability.component';
import { CommonModule } from '@angular/common';
import { AccountDetailsService } from './services/account-details.service.ts.service';
import { AccountDetails } from '../../shared/interfaces/account/account-details.interface';
import { ComplienceAndDocsComponent } from './components/complience-and-docs/complience-and-docs.component';

@Component({
  selector: 'app-account',
  imports: [
    AccountHeaderComponent,
    PolicyCardsComponent,
    CommunicationComponent,
    PoliciesTableComponent,
    PerformanceMetricsComponent,
    AccountStatusComponent,
    WinnabilityComponent,
    ComplienceAndDocsComponent,
    CommonModule
  ],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent implements OnInit{
  accountDetails = signal<AccountDetails | undefined>(undefined)

    constructor(private accountDetailsService: AccountDetailsService) {}

    ngOnInit(): void {
      this.accountDetailsService.getAccountDetails().subscribe({
        next: (data) => this.accountDetails.set(data as AccountDetails),
        error: (err) => console.error(err)
      });
    }
}
