import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './reusable/navbar/navbar.component';
import { NavLinkComponent } from './reusable/nav-link/nav-link.component';
import { MainBtnComponent } from './reusable/main-btn/main-btn.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, NavbarComponent, NavLinkComponent, MainBtnComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
