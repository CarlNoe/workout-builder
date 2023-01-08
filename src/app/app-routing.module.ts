import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { BrowseWorkoutsComponent } from './pages/browse-workouts/browse-workouts.component';
import { WorkoutBuilderComponent } from './pages/workout-builder/workout-builder.component';
import { AboutComponent } from './pages/about/about.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { WorkoutRoutineComponent } from './pages/workout-routine/workout-routine.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'workout-list', component: BrowseWorkoutsComponent },
  { path: 'workout-builder', component: WorkoutBuilderComponent },
  { path: 'about', component: AboutComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'workout-routine/:routineId', component: WorkoutRoutineComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
