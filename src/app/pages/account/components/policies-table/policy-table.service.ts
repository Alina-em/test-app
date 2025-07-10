import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PolicyTable } from '../../../../shared/interfaces/account/policy-table.interface';

@Injectable({
  providedIn: 'root'
})
export class PolicyTableService {

  private baseUrl = environment.baseUrl;
  private policiesUrl = `${this.baseUrl}/policy-table.data.json`;

  constructor(private http: HttpClient) { }

  getPolicies(): Observable<PolicyTable[]> {
    return this.http.get<PolicyTable[]>(this.policiesUrl);
  }
}
