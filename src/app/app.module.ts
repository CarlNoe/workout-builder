import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/global/navbar/navbar.component';
import { NavLinkComponent } from './components/global/nav-link/nav-link.component';
import { MainBtnComponent } from './components/global/main-btn/main-btn.component';
import { AboutComponent } from './pages/about/about.component';
import { WorkoutListComponent } from './pages/workout-list/workout-list.component';
import { WorkoutBuilderComponent } from './pages/workout-builder/workout-builder.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { WorkoutItemComponent } from './components/workout-item/workout-item.component';
import { WorkoutBuilderItemComponent } from './components/workout-builder/workout-builder-item/workout-builder-item.component';
import { WorkoutBuilderAddItemComponent } from './components/workout-builder/workout-builder-add-item/workout-builder-add-item.component';
import { WorkoutBuilderPopupComponent } from './components/workout-builder/workout-builder-popup/workout-builder-popup.component';
import { TextInputComponent } from './components/global/text-input/text-input.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    NavLinkComponent,
    MainBtnComponent,
    AboutComponent,
    WorkoutListComponent,
    WorkoutBuilderComponent,
    LoginComponent,
    RegisterComponent,
    WorkoutItemComponent,
    WorkoutBuilderItemComponent,
    WorkoutBuilderAddItemComponent,
    WorkoutBuilderPopupComponent,
    TextInputComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
