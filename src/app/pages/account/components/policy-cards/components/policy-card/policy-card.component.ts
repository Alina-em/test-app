import { Component, input } from '@angular/core';
import { Policy } from '../../../../../../shared/interfaces/account/policy.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-policy-card',
  imports: [CommonModule],
  templateUrl: './policy-card.component.html',
  styleUrl: './policy-card.component.scss'
})
export class PolicyCardComponent {
  policy = input<Policy>();
}
