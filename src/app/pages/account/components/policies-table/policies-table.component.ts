import { Component, Signal, computed } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { SearchFilterGroupComponent } from '../../../../shared/search-filter-group/search-filter-group.component';
import { PolicyTable } from '../../../../shared/interfaces/account/policy-table.interface';
import { PolicyTableService } from './policy-table.service';

@Component({
  selector: 'app-policies-table',
  imports: [CommonModule, SearchFilterGroupComponent],
  templateUrl: './policies-table.component.html',
  styleUrl: './policies-table.component.scss'
})
export class PoliciesTableComponent {
  infoIconPath = '/assets/info.svg';
  activeStatusIconPath = '/assets/icons/status-active.svg';
  pendingStatusIconPath = '/assets/icons/status-pending.svg';

  policies: Signal<PolicyTable[] | undefined>;


  constructor(private policyTableService: PolicyTableService) {
    this.policies = toSignal(this.policyTableService.getPolicies());
  }

  totalExpiringTech = computed(() => {
    const policies = this.policies();
    return policies ? policies.reduce((sum, p) => sum + p.expiringTech, 0) : 0;
  });

  totalExpiringPremium = computed(() => {
    const policies = this.policies();
    return policies ? policies.reduce((sum, p) => sum + p.expiringPremium, 0) : 0;
  });

  totalRenewalTech = computed(() => {
    const policies = this.policies();
    return policies ? policies.reduce((sum, p) => sum + p.renewalTech, 0) : 0;
  });

  totalRenewalPremium = computed(() => {
    const policies = this.policies();
    return policies ? policies.reduce((sum, p) => sum + p.renewalPremium, 0) : 0;
  });

  totalPoliciesCount = computed(() => this.policies()?.length || 0);

  formatCurrency(amount: number): string {
    return `$${amount.toLocaleString('en-US')}`;
  }

  formatRateChange(value: number | 'N/A'): string {
    return typeof value === 'number' ? `${value}%` : value;
  }

  getRateChangeColorClass(value: number | 'N/A', index: number): string {
    if (index === 1 || index === 3) {
      return 'rate-change-red';
    }
    return '';
  }

  getLossRatioClass(value: number | 'N/A'): string {
    if (typeof value !== 'number') {
      return '';
    }
    if (value < 40) {
      return 'loss-ratio-green';
    } else if (value >= 40 && value <= 70) {
      return 'loss-ratio-yellow';
    } else {
      return 'loss-ratio-red';
    }
  }

  toNumber(value: string | number): number {
    return Number(value);
  }
// checking if type is numeric to check loss ratio and apply red color where needed
  isNumeric(value: string | number): boolean {
    if (typeof value === 'number') {
      return true;
    }
    return !isNaN(parseFloat(value));
  }
}
