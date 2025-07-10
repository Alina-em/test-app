import { Component, OnInit, signal } from '@angular/core';
import { PolicyCardComponent } from './components/policy-card/policy-card.component';
import { CommonModule } from '@angular/common';
import { Policy } from '../../../../shared/interfaces/account/policy.interface';
import { PolicyService } from './policy.service';

@Component({
  selector: 'app-policy-cards',
  imports: [PolicyCardComponent, CommonModule],
  templateUrl: './policy-cards.component.html',
  styleUrl: './policy-cards.component.scss'
})
export class PolicyCardsComponent implements OnInit{
  readonly policies = signal<Policy[]>([]);

  constructor(private policyService: PolicyService){}

  ngOnInit(): void {
    this.loadPolicies();
  }

  private loadPolicies() {
    this.policyService.getPolicies().subscribe({
      next: (data) => this.policies.set(data),
      error: (err) => console.error('Failed to load policies:', err)
    });
  }
}
