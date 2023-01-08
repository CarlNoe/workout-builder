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

  openPopup(popupSession: number) {
    console.log(popupSession, 'openPopup()');
    this.currentPopupSession = popupSession;
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
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

    if (!workoutRoutine) {
      alert('Please add at least 1 sessions to your workout routine');
      return;
    }

    if (workoutRoutine.workoutRoutineName === '') {
      alert('Please add a name to your workout routine');
      return;
    }

    if (workoutRoutine.workoutRoutineDescription === '') {
      alert('Please add a description to your workout routine');
      return;
    }

    if (workoutRoutine.workoutSessions.length === 0) {
      alert('Please add at least one session to your workout routine');
      return;
    }

    workoutRoutine.workoutSessions.forEach((session: any) => {
      if (session.exercises.length === 0) {
        alert('Please add at least one exercise to each session');
        return;
      }
    });

    if (token) {
      this.firestoreService
        .addWorkoutRoutine(workoutRoutine, token)
        .then(() => {
          alert('Workout routine saved successfully');
        })
        .catch((err) => {
          alert(`${err.message} Please try again`);
        });
      this.LsWorkoutRoutineService.deleteLsWorkoutRoutine();
      this.updateWorkoutSessions();
    } else {
      alert('Please login to save your workout routine');
    }
  }
}
