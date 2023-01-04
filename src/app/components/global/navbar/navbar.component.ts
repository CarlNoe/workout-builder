import { Component } from '@angular/core';
import { NavLinkComponent } from '../nav-link/nav-link.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  links: NavLinkComponent[] = [
    {
      link: '/',
      text: 'Home',
    },
    {
      link: '/workout-list',
      text: 'Workout List',
    },
    {
      link: '/workout-builder',
      text: 'Builder',
    },
    {
      link: '/about',
      text: 'About',
    },
    {
      link: '/register',
      text: 'Sign In/Up',
    },
  ];

  constructor() {}
}
