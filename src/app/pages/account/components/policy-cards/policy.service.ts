import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { Observable } from 'rxjs';
import { Policy } from '../../../../shared/interfaces/account/policy.interface';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {
  private baseUrl = environment.baseUrl;
  url = `${this.baseUrl}/policy-cards.data.json`

  constructor(private http: HttpClient) { }

  getPolicies(): Observable<Policy[]> {
    return this.http.get<Policy[]>(this.url);
  }
}
