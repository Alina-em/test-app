import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccountStatusStep } from '../../../../shared/interfaces/account/account-status.interface';

@Injectable({
  providedIn: 'root'
})
export class AccountStatusService {
  private baseUrl = environment.baseUrl;
  private url = `${this.baseUrl}/account-status.data.json`;

  constructor(private http: HttpClient) {}

  getStatusSteps(): Observable<AccountStatusStep[]> {
    return this.http.get<AccountStatusStep[]>(this.url);
  }
}
