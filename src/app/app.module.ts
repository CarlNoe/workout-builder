import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavLinkComponent } from './components/nav-link/nav-link.component';
import { MainBtnComponent } from './components/main-btn/main-btn.component';
import { AboutComponent } from './pages/about/about.component';
import { WorkoutListComponent } from './pages/workout-list/workout-list.component';
import { WorkoutBuilderComponent } from './pages/workout-builder/workout-builder.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { WorkoutItemComponent } from './components/workout-item/workout-item.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, NavbarComponent, NavLinkComponent, MainBtnComponent, AboutComponent, WorkoutListComponent, WorkoutBuilderComponent, LoginComponent, RegisterComponent, WorkoutItemComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
