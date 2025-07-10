import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { Observable, map, of } from 'rxjs';
import { PortfolioGoalsMetrics } from '../../../../shared/interfaces/dashboard-interfaces/portfolio-goals.interface';

@Injectable({
  providedIn: 'root'
})
export class PortfolioGoalsService {
  private basUrl = environment.baseUrl;
  url = `${this.basUrl}/portfolio-goals.data.json`

  constructor(private http: HttpClient) { }

  getPortfolioGoals(): Observable<PortfolioGoalsMetrics> {
    interface ApiResponseWrapper {
      portfolioGoals: PortfolioGoalsMetrics;
    }

    return this.http.get<ApiResponseWrapper>(this.url)
    .pipe(
      map(response => {
        if (!response || !response.portfolioGoals) {
          throw new Error('API response for portfolio goals is malformed or empty.');
        }
        return response.portfolioGoals;
      })
    );
  }
}