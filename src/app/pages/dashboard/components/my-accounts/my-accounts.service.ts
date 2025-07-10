import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { Observable, map } from 'rxjs';
import { AccountDataItem } from '../../../../shared/interfaces/dashboard-interfaces/my-accounts';

@Injectable({
  providedIn: 'root'
})
export class MyAccountsService {
  constructor(private http: HttpClient) { }

  private baseUrl = environment.baseUrl;
  url = `${this.baseUrl}/my-accounts.data.json`

  getMyAccounts(): Observable<AccountDataItem[]> {
    return this.http.get<AccountDataItem[]>(this.url)
      .pipe(
        map((response) => {
          if (!response) {
            throw new Error(('API response for my accounts is empty'));
          }
          return response;
        })
      )
  }
}
