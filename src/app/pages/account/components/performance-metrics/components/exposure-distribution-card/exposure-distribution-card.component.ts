import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { ExposureDistributionCardData } from '../../../../../../shared/interfaces/account/performance-metric.interface';

@Component({
  selector: 'app-exposure-distribution-card',
  imports: [CommonModule],
  templateUrl: './exposure-distribution-card.component.html',
  styleUrl: './exposure-distribution-card.component.scss'
})
export class ExposureDistributionCardComponent {
  exposureDistributionData = input.required<ExposureDistributionCardData>();
}
