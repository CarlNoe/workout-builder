import { getAuth } from '@angular/fire/auth';
import { Component, Input, OnInit } from '@angular/core';
import { Exercise } from 'src/app/shared/models/exercise';
import { LsWorkoutRoutineService } from 'src/app/shared/services/ls-workout-routine.service';
import { FirestoreService } from 'src/app/shared/services/firebase/firestore.service';
import { FireauthService } from 'src/app/shared/services/firebase/fireauth.service';
@Component({
  selector: 'app-workout-builder',
  templateUrl: './workout-builder.component.html',
})
export class WorkoutBuilderComponent implements OnInit {
  @Input() selectedExercise: Exercise | undefined;

  currentPopupSession: number = 0;
  showPopup: boolean = false;

  workoutRoutineName: string = '';
  workoutRoutineDescription: string = '';
  workoutSessions: any[] = [];

  constructor(
    private LsWorkoutRoutineService: LsWorkoutRoutineService,
    private firestoreService: FirestoreService,
    private fireauthService: FireauthService
  ) {}

  ngOnInit() {
    let workoutRoutine = this.LsWorkoutRoutineService.getLsWorkoutRoutine();

    if (!workoutRoutine) {
      this.LsWorkoutRoutineService.initLsWorkoutRoutine();
      workoutRoutine = this.LsWorkoutRoutineService.getLsWorkoutRoutine();
    }
    this.workoutRoutineName = workoutRoutine.workoutRoutineName;
    this.workoutRoutineDescription = workoutRoutine.workoutRoutineDescription;
    this.workoutSessions = workoutRoutine.workoutSessions;
  }

  togglePopup() {
    this.showPopup = !this.showPopup;
  }

  updateWorkoutSessions() {
    this.workoutSessions =
      this.LsWorkoutRoutineService.getLsWorkoutRoutine().workoutSessions;
  }

  onExerciseSelected(exercise: any) {
    console.log(exercise);
  }

  onWorkoutNameChanged(event: Event) {
    const workoutRoutineName = (event.target as HTMLInputElement).value;
    this.LsWorkoutRoutineService.updateLsWorkoutName(workoutRoutineName);
  }

  onWorkoutDescriptionChanged(event: Event) {
    const workoutRoutineDescription = (event.target as HTMLInputElement).value;
    this.LsWorkoutRoutineService.updateLsWorkoutDescription(
      workoutRoutineDescription
    );
  }

  onAddSessionClick() {
    this.LsWorkoutRoutineService.addLsWorkoutSession();
    this.updateWorkoutSessions();
  }

  onDeleteWorkoutRoutineClick() {
    this.LsWorkoutRoutineService.deleteLsWorkoutRoutine();
    this.updateWorkoutSessions();
    this.workoutRoutineName = '';
    this.workoutRoutineDescription = '';

    const nameInput = document.getElementById(
      'workout-name'
    ) as HTMLInputElement;
    const descriptionTextarea = document.getElementById(
      'workout-description'
    ) as HTMLTextAreaElement;

    nameInput.value = '';
    descriptionTextarea.value = '';
  }

  onSaveWorkoutRoutineClick() {
    const workoutRoutine = this.LsWorkoutRoutineService.getLsWorkoutRoutine();
    const token = this.fireauthService.getToken();

    if (token) {
      this.firestoreService
        .addWorkoutRoutine(workoutRoutine, token)
        .then(() => {
          alert('Workout routine saved successfully');
        })
        .catch((err) => {
          alert(`${err.message} Please try again`);
        });
    } else {
      alert('Please login to save your workout routine');
    }
  }
}
