import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { NavLinkComponent } from './shared/components/nav-link/nav-link.component';
import { MainBtnComponent } from './shared/components/main-btn/main-btn.component';
import { AboutComponent } from './pages/about/about.component';
import { BrowseWorkoutsComponent } from './pages/browse-workouts/browse-workouts.component';
import { WorkoutBuilderComponent } from './pages/workout-builder/workout-builder.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { BrowseWorkoutsItemComponent } from './pages/browse-workouts/components/browse-workouts-item/browse-workouts-item.component'
import { WorkoutBuilderExerciseComponent } from './pages/workout-builder/components/workout-builder-exercise/workout-builder-exercise.component';
import { WorkoutBuilderAddExerciseComponent } from './pages/workout-builder/components/workout-builder-add-exercise/workout-builder-add-exercise.component';
import { WorkoutBuilderPopupComponent } from './pages/workout-builder/components/workout-builder-popup/workout-builder-popup.component';
import { TextInputComponent } from './shared/components/text-input/text-input.component';

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
