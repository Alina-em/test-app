import { CommonModule } from '@angular/common';
import { Component, OnInit, Signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AccountStatusService } from './account-status.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { AccountStatusStep } from '../../../../shared/interfaces/account/account-status.interface';


@Component({
  selector: 'app-account-status',
  imports: [ CommonModule, MatIconModule],
  templateUrl: './account-status.component.html',
  styleUrl: './account-status.component.scss'
})
export class AccountStatusComponent {
  checkedIconPath = '/assets/checkmarks/checked.svg';
  uncheckedIconPath = '/assets/checkmarks/unchecked.svg';
  statuses: Signal<AccountStatusStep[] | undefined>;

  constructor (private accountStatusService: AccountStatusService) {
    this.statuses = toSignal(this.accountStatusService.getStatusSteps());
  }

}
