import { CommonModule } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { WinnabilityFactor } from '../../../../../../shared/interfaces/account/winnability/winnability.interface';

@Component({
  selector: 'app-winnability-factors',
  imports: [CommonModule],
  templateUrl: './winnability-factors.component.html',
  styleUrl: './winnability-factors.component.scss'
})
export class WinnabilityFactorsComponent {

  Math = Math; 

  arrowUpIconPath = 'M12 4L4 12H9V20H15V12H20L12 4Z'; 
  arrowDownIconPath = 'M12 20L20 12H15V4H9V12H4L12 20Z'; 

  title = input.required<string>();
  factors = input.required<WinnabilityFactor[]>();
  type = input.required<'increasing' | 'decreasing'>();

  isIncreasing = computed(() => this.type() === 'increasing');


  currentArrowIconPath = computed(() =>
    this.isIncreasing() ? this.arrowUpIconPath : this.arrowDownIconPath
  );

  formatPercentage(value: number): string {
  const absValue = Math.abs(value);
  const sign = value > 0 ? '+' : value < 0 ? '-' : '';
  return `${sign}${absValue}%`;
}
}
