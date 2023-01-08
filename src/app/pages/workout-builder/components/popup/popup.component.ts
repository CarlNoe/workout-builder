import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { ExercisesApiService } from 'src/app/shared/services/exercises-api.service';
import { LsWorkoutRoutineService } from 'src/app/shared/services/ls-workout-routine.service';
import { Exercise } from 'src/app/shared/models/exercise';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
})
export class PopupComponent implements OnInit {
  @Output() closePopup = new EventEmitter<void>();
  @Output() exerciseAdded = new EventEmitter<void>();
  @Input() popupSession: number = 0;

  exercises: Exercise[] = [];

  selectedExercise: Exercise = {
    id: '',
    name: '',
    bodyPart: '',
    muscleTarget: '',
    equipmentUsed: '',
    image: '',
  };

  repAmount: number = 0;
  setAmount: number = 0;

  constructor(
    private exercisesApiService: ExercisesApiService,
    private LsWorkoutRoutineService: LsWorkoutRoutineService
  ) {}

  ngOnInit(): void {
    this.exercisesApiService.getExercises().subscribe((data: any) => {
      this.exercises = data;
    });
  }

  addExerciseToLs() {
    const exercise = {
      ...this.selectedExercise,
      repAmount: this.repAmount,
      setAmount: this.setAmount,
    };

    // Get the workoutRoutine from local storage, else create a new one
    let workoutRoutine;
    if (!this.LsWorkoutRoutineService.getLsWorkoutRoutine()) {
      this.LsWorkoutRoutineService.initLsWorkoutRoutine();
    }
    workoutRoutine = this.LsWorkoutRoutineService.getLsWorkoutRoutine();
    console.log(workoutRoutine, "workoutRoutine")

    // Get the workoutSession from the workoutRoutine
    let workoutSession = workoutRoutine.workoutSessions.find(
      (session: any) => session.session === this.popupSession
    );
    console.log(workoutSession, "workoutSession1")
    // If the workoutSession doesn't exist, create a new one
    if (!workoutSession) {
      workoutSession = {
        session: this.popupSession,
        exercises: [],
      };
      workoutRoutine.workoutSessions.push(workoutSession);
    }
    console.log(workoutSession, "workoutSession2")
    workoutSession.exercises.push(exercise);
    console.log(workoutSession, "workoutSession3")
    // Save the workoutRoutine to local storage
    localStorage.setItem('workoutRoutine', JSON.stringify(workoutRoutine));
  }

  onRepAmountChange(event: any) {
    this.repAmount = event.target.value;
  }

  onSetAmountChange(event: any) {
    this.setAmount = event.target.value;
  }

  onExerciseSelect(exercise: Exercise) {
    this.selectedExercise = exercise;
  }

  onAddExerciseClick() {
    this.addExerciseToLs();
    this.exerciseAdded.emit();
    this.closePopup.emit();
  }

  onBackgroundClick(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      this.closePopup.emit();
    }
  }
}
