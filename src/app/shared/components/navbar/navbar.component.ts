import { Component } from '@angular/core';
import { FireauthService } from '../../services/firebase/fireauth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  isLoggedIn: boolean = false;

  constructor(private fireauthService: FireauthService) {}

  ngOnInit() {
    this.isLoggedIn = this.fireauthService.getToken() !== "";
  }

  onLogout() {
    this.fireauthService.logout();
  }
}