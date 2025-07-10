import { Component, input } from '@angular/core';
import { AccountDetails } from '../../../../shared/interfaces/account/account-details.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-account-header',
  imports: [CommonModule],
  templateUrl: './account-header.component.html',
  styleUrl: './account-header.component.scss'
})
export class AccountHeaderComponent {
  accountDetails = input<AccountDetails>();
}
