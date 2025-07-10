import { Component } from '@angular/core';
import { NavbarItem } from '../interfaces/navbar-item.interface';
import { navbarItems } from '../consts/navbar-data.constant';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule, MatIconModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  navbarItems: NavbarItem[] = navbarItems;
  activeRoute: string = '/dashboard';

}
