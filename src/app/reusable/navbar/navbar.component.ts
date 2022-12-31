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
      link: '/workouts',
      text: 'Workouts',
    },
    {
      link: '/exercises',
      text: 'Exercises',
    },
    {
      link: '/about',
      text: 'About',
    },
    {
      link: '/contact',
      text: 'Contact',
    },
  ];

  constructor() {}
}
