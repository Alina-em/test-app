import { Component } from '@angular/core';
import { WorkQueueComponent } from './components/work-queue/work-queue.component';
import { MyAccountsComponent } from './components/my-accounts/my-accounts.component';
import { QuickActionsComponent } from './components/quick-actions/quick-actions.component';
import { PortfolioGoalsComponent } from './components/portfolio-goals/portfolio-goals.component';
import { MarketIntelComponent } from './components/market-intel/market-intel.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    WorkQueueComponent,
    MyAccountsComponent,
    QuickActionsComponent,
    PortfolioGoalsComponent,
    MarketIntelComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
