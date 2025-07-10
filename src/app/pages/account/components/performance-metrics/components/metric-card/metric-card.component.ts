import { Component, input } from '@angular/core';
import { MetricCard } from '../../../../../../shared/interfaces/account/metric-card.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-metric-card',
  imports: [CommonModule],
  templateUrl: './metric-card.component.html',
  styleUrl: './metric-card.component.scss'
})
export class MetricCardComponent {
  metricData = input.required<MetricCard>();

  get blueCirclesCount(): number[] {
    return Array(4).fill(0); 
  }
}
