import { Component } from '@angular/core';
import { FireauthService } from '../../services/firebase/fireauth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  isLoggedIn: boolean = false;
  loginStatusSubscription: Subscription = new Subscription();

  constructor(private fireauthService: FireauthService) {}

  ngOnInit() {
    this.loginStatusSubscription = this.fireauthService.loginStatusObservable.subscribe(
      (isLoggedIn: boolean) => {
        this.isLoggedIn = isLoggedIn;
      }
    );
  }

  ngOnDestroy() {
    this.loginStatusSubscription.unsubscribe();
  }

  onLogout() {
    this.fireauthService.logout();
  }
}