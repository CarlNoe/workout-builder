import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { ExercisesApiService } from 'src/app/shared/services/exercises-api.service';
import { LsWorkoutRoutineService } from 'src/app/shared/services/ls-workout-routine.service';
import { Exercise } from 'src/app/shared/models/exercise';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
})
export class PopupComponent {
  @Output() closePopup = new EventEmitter<void>();
  @Input() workoutSession: number = 0;

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

    // Get the workoutSession from the workoutRoutine
    let workoutSession = workoutRoutine.workoutSessions.find(
      (session: any) => session.session === this.workoutSession
    );
    // If the workoutSession doesn't exist, create a new one
    if (!workoutSession) {
      workoutSession = {
        session: this.workoutSession,
        exercises: [],
      };
      workoutRoutine.workoutSessions.push(workoutSession);
    }

    workoutSession.exercises.push(exercise);

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
    this.closePopup.emit();
  }

  onBackgroundClick(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      this.closePopup.emit();
    }
  }

  ngOnInit(): void {
    this.exercisesApiService.getExercises().subscribe((data: any) => {
      this.exercises = data;
    });
  }

  constructor(
    private exercisesApiService: ExercisesApiService,
    private LsWorkoutRoutineService: LsWorkoutRoutineService
  ) {}
}
