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
import { BrowseWorkoutsComponent } from './pages/browse-workouts/browse-workouts.component';
import { WorkoutBuilderComponent } from './pages/workout-builder/workout-builder.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { BrowseWorkoutsItemComponent } from './components/browse-workouts/browse-workouts-item/browse-workouts-item.component';
import { WorkoutBuilderExerciseComponent } from './components/workout-builder/workout-builder-exercise/workout-builder-exercise.component';
import { WorkoutBuilderAddExerciseComponent } from './components/workout-builder/workout-builder-add-exercise/workout-builder-add-exercise.component';
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
    BrowseWorkoutsComponent,
    WorkoutBuilderComponent,
    LoginComponent,
    RegisterComponent,
    BrowseWorkoutsItemComponent,
    WorkoutBuilderExerciseComponent,
    WorkoutBuilderAddExerciseComponent,
    WorkoutBuilderPopupComponent,
    TextInputComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
