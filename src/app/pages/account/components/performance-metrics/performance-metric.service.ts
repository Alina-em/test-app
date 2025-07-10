import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PerformanceMetricsData } from '../../../../shared/interfaces/account/performance-metric.interface';

@Injectable({
  providedIn: 'root'
})
export class PerformanceMetricService {
  private baseUrl = environment.baseUrl;
  url = `${this.baseUrl}/performance-metrics.data.json`;

  constructor(private http: HttpClient) { }

  getPerformanceMetricsData(): Observable<PerformanceMetricsData> {
    return this.http.get<PerformanceMetricsData>(this.url);
  }
}
