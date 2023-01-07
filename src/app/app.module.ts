import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { NavLinkComponent } from './shared/components/nav-link/nav-link.component';
import { AboutComponent } from './pages/about/about.component';
import { BrowseWorkoutsComponent } from './pages/browse-workouts/browse-workouts.component';
import { WorkoutBuilderComponent } from './pages/workout-builder/workout-builder.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { WorkoutItemComponent } from './pages/browse-workouts/components/workout-item/workout-item.component';
import { ExerciseComponent } from './pages/workout-builder/components/exercise/exercise.component';
import { AddExerciseComponent } from './pages/workout-builder/components/add-exercise/add-exercise.component';
import { PopupComponent } from './pages/workout-builder/components/popup/popup.component';
import { TextInputComponent } from './shared/components/text-input/text-input.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    NavLinkComponent,
    AboutComponent,
    BrowseWorkoutsComponent,
    WorkoutBuilderComponent,
    LoginComponent,
    RegisterComponent,
    WorkoutItemComponent,
    ExerciseComponent,
    AddExerciseComponent,
    PopupComponent,
    TextInputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
