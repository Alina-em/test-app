import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Recommendation } from '../../../../shared/interfaces/account/winnability/recommendations.interface';
import { WinnabilityData } from '../../../../shared/interfaces/account/winnability/winnability.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WinnabilityService {
  private baseUrl = environment.baseUrl;
  winnabilityUrl = `${this.baseUrl}/winnability.data.json`;
  recommendationsUrl = `${this.baseUrl}/recommendations.data.json`;

  constructor(private http: HttpClient) { }

  getWinnabilityData(): Observable<WinnabilityData> {
    return this.http.get<WinnabilityData>(this.winnabilityUrl);
  };

  getRecommendationsData(): Observable<Recommendation[]> {
    return this.http.get<Recommendation[]>(this.recommendationsUrl);
  }
}
