import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ComplianceItem } from '../../../../shared/interfaces/account/compliance.interface';

@Injectable({
  providedIn: 'root'
})
export class ComplianceService {
  private baseUrl = environment.baseUrl;
  private url = `${this.baseUrl}/compliance-documentation.data.json`; 
  
  constructor(private http: HttpClient) { }

  getCompliance(): Observable<ComplianceItem[]> {
    return this.http.get<ComplianceItem[]>(this.url);
  }
}
