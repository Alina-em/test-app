import { Component, OnInit, signal } from '@angular/core';
import { ExposureDistributionCardComponent } from './components/exposure-distribution-card/exposure-distribution-card.component';
import { CommonModule } from '@angular/common';
import { PerformanceMetricsData } from '../../../../shared/interfaces/account/performance-metric.interface';
import { PerformanceMetricService } from './performance-metric.service';
import { MetricCardComponent } from './components/metric-card/metric-card.component';

@Component({
  selector: 'app-performance-metrics',
  imports: [
    CommonModule,
    ExposureDistributionCardComponent,
    MetricCardComponent

  ],
  templateUrl: './performance-metrics.component.html',
  styleUrl: './performance-metrics.component.scss'
})
export class PerformanceMetricsComponent implements OnInit {
  performanceMetricsData = signal<PerformanceMetricsData | undefined>(undefined);

  constructor(private performanceMetricsService: PerformanceMetricService) {}

  ngOnInit(): void {
    this.performanceMetricsService.getPerformanceMetricsData().subscribe({
      next: (data) => this.performanceMetricsData.set(data),
      error: (err) => console.error('Error fetching performance metrics:', err)
    });
  }
}
