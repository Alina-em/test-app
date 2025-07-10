import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { WorkQueueItem } from '../../../../shared/interfaces/dashboard-interfaces/work-queue.interface';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WorkQueueService {
  private baseUrl = environment.baseUrl
  url =  `${this.baseUrl}/work-queue.data.json`

  constructor(private http: HttpClient) {}

  getWorkQueue(): Observable<WorkQueueItem[]> {
    return this.http.get<WorkQueueItem[]>(this.url)
      .pipe(
        map((response) => {
          if(!response) {
            throw new Error(('API response for work queue is empty'))
          }
          return response;
        } )
      )
    ;
  }
}
