import { CommonModule } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { HistoricalTrendDataPoint } from '../../../../../../../../shared/interfaces/account/winnability/winnability.interface';

@Component({
  selector: 'app-historical-trend',
  imports: [CommonModule],
  templateUrl: './historical-trend.component.html',
  styleUrl: './historical-trend.component.scss'
})
export class HistoricalTrendComponent {
  trendData = input.required<HistoricalTrendDataPoint[]>();

  private svgWidth = 280;
  private svgHeight = 100;
  private padding = 10;

//computing the data signal to calculate points
  linePoints = computed(() => {
    const data = this.trendData();
    if (!data || data.length === 0) {
      return '';
    }
    const values = data.map(d => d.value);
    const minValue = Math.min(...values);
    const maxValue = Math.max(...values);

    //defining drawing area
    const effectiveWidth = this.svgWidth - 2 * this.padding;
    const effectiveHeight = this.svgHeight - 2 * this.padding;

    const xStep = data.length > 1 ? effectiveWidth / (data.length - 1) : 0;

    // generating graphic points
    return data.map((point, index) => {

      const x = this.padding + index * xStep; 

      const y = this.padding + effectiveHeight - ((point.value - minValue) / (maxValue - minValue)) * effectiveHeight;

      return `${x},${y}`;
    }).join(' ');
  });

  monthLabels = computed(() => this.trendData()?.map(d => d.month) || []);

}
