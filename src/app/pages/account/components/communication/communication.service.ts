import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from '../../../../shared/interfaces/account/message.interface';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  private baseUrl = environment.baseUrl;
  url = `${this.baseUrl}/message.data.json`
  constructor( private http: HttpClient) { }

  getMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(this.url);
  }
}
