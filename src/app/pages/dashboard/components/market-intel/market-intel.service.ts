import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { MarketIntelligenceItem } from '../../../../shared/interfaces/dashboard-interfaces/market-intel.interface';

@Injectable({
  providedIn: 'root'
})
export class MarketIntelService {
  private baseUrl = environment.baseUrl;
  url = `${this.baseUrl}/market-intel.data.json`

  constructor(private http: HttpClient) { }

  getMarketIntelligence(): Observable<MarketIntelligenceItem[]> {
    return this.http.get<{ items: MarketIntelligenceItem[] }>(this.url).pipe(
      map((response => {
        if (!response) {
          throw new Error(('API response for market intellegence is empty'));
        }
        return response.items
      }))
    );
  }
}
