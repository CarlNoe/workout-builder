import { Component, Input, OnInit } from '@angular/core';
import { Exercise } from 'src/app/shared/models/exercise';
import { WorkoutExercise } from 'src/app/shared/models/workout-exercise';
import { LsWorkoutRoutineService } from 'src/app/shared/services/ls-workout-routine.service';
@Component({
  selector: 'app-workout-builder',
  templateUrl: './workout-builder.component.html',
})
export class WorkoutBuilderComponent {
  @Input() selectedExercise: Exercise | undefined;

  showPopup: boolean = false;

  workoutSessions: any[] = [];

  togglePopup() {
    this.showPopup = !this.showPopup;
  }

  getLsWorkoutSessions() {
    const workoutRoutine = this.LsWorkoutRoutineService.getLsWorkoutRoutine();
    if (workoutRoutine.workoutSessions.length > 0) {
      this.workoutSessions = workoutRoutine.workoutSessions;
    }
  }

  onExerciseSelected(exercise: any) {
    console.log(exercise);
  }

  ngOnInit() {
    this.getLsWorkoutSessions();
  }

  constructor(private LsWorkoutRoutineService: LsWorkoutRoutineService) {}
}
