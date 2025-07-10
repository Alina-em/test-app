import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { TopbarComponent } from './shared/topbar/topbar.component';
import { IconService } from './shared/services/icon.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, TopbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'test-app';
  constructor(iconService: IconService) {}
}
