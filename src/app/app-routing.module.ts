import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { WorkoutListComponent } from './workout-list/workout-list.component';
import { WorkoutBuilderComponent } from './workout-builder/workout-builder.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'workout-list', component: WorkoutListComponent },
  { path: 'workout-builder', component: WorkoutBuilderComponent },
  { path: 'about', component: AboutComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
