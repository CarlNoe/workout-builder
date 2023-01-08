import { Component, OnInit } from '@angular/core';
import { FireauthService } from 'src/app/shared/services/firebase/fireauth.service';
import { FirestoreService } from 'src/app/shared/services/firebase/firestore.service';
import { WorkoutRoutine } from 'src/app/shared/models/workout-routine';
@Component({
  selector: 'app-browse-workouts',
  templateUrl: './browse-workouts.component.html',
})
export class BrowseWorkoutsComponent implements OnInit {
  isLoggedIn: boolean = false;
  userWorkoutRoutines: WorkoutRoutine[] = [];

  constructor(private fireauthService: FireauthService) {}

  ngOnInit(): void {
    this.isLoggedIn = this.fireauthService.getToken() !== null;
  }
}
