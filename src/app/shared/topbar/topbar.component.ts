import { Component } from '@angular/core';
import { GreetingComponent } from './greeting/greeting.component';
import { SearchbarComponent } from '../searchbar/searchbar.component';
import { ArComponent } from './ar/ar.component';

@Component({
  selector: 'app-topbar',
  imports: [GreetingComponent, SearchbarComponent, ArComponent],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})
export class TopbarComponent {
  userFirstName = 'Arthur';
  userSurname = 'Rembo';

  openTasksAmount = 12;
}
