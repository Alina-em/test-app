import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { AccountDetails } from '../../../shared/interfaces/account/account-details.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountDetailsService {
  private baseUrl = environment.baseUrl;
  url = `${this.baseUrl}/account-details.data.json`;

  constructor(private http: HttpClient) { }

  getAccountDetails(): Observable<AccountDetails> {
    return this.http.get<AccountDetails>(this.url);
  }
}
