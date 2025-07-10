import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountDataItem } from '../../../../shared/interfaces/dashboard-interfaces/my-accounts';
import { Store } from '@ngrx/store';
import { selectMyAccountGetItems } from '../../../../store/my-accounts/my-accounts.selectors';
import { MyAccountGetLoad } from '../../../../store/my-accounts/my-accounts.actions';
import { NgIconComponent } from '@ng-icons/core';

@Component({
  selector: 'app-my-accounts',
  imports: [CommonModule],
  templateUrl: './my-accounts.component.html',
  styleUrl: './my-accounts.component.scss'
})
export class MyAccountsComponent implements OnInit {
  accountItems$: Observable<AccountDataItem[]>

  constructor(private store: Store) {
    this.accountItems$ = this.store.select(selectMyAccountGetItems)
  }

  ngOnInit(): void {
    this.store.dispatch(MyAccountGetLoad())
  }
}
