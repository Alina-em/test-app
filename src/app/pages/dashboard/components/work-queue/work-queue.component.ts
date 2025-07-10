import { Component, OnInit, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectWorkQueueGetItems } from '../../../../store/work-queue/work-queue.selectors';
import { workQueueGetLoad } from '../../../../store/work-queue/work-queue.actions';
import { WorkQueueItem } from '../../../../shared/interfaces/dashboard-interfaces/work-queue.interface';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-work-queue',
  imports: [CommonModule],
  templateUrl: './work-queue.component.html',
  styleUrl: './work-queue.component.scss'
})
export class WorkQueueComponent implements OnInit {
  workQueue$: Observable<WorkQueueItem[]>;

  selectedTab = 'assigned tasks';

  assignedTasks = signal(12);
  pendingReview = signal(8);
  referrals = signal(3);

  constructor(private store: Store) {
    this.workQueue$ = this.store.select(selectWorkQueueGetItems);
  }

  ngOnInit(): void {
    this.store.dispatch(workQueueGetLoad());
  }

  selectTab(tab: string) {
    this.selectedTab = tab;
  }

  trackById(index: number, item: WorkQueueItem) {
    return item.id;
  }
}
