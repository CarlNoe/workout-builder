import { Component, Input, OnInit } from '@angular/core';
import { Exercise } from 'src/app/shared/models/exercise';
import { WorkoutExercise } from 'src/app/shared/models/workout-exercise';
@Component({
  selector: 'app-workout-builder',
  templateUrl: './workout-builder.component.html',
})
export class WorkoutBuilderComponent {
  @Input() selectedExercise: Exercise | undefined;

  showPopup: boolean = false;

  workoutExerciseList: WorkoutExercise[] = [];

  togglePopup() {
    this.showPopup = !this.showPopup;
  }

  getExercisesFromLocalStorage() {
    let exercises = JSON.parse(
      localStorage.getItem('exercises') || '[]'
    );

    this.workoutExerciseList = exercises;
  }

  onExerciseSelected(exercise: any) {
    console.log(exercise);
  }

  ngOnInit() {
    this.getExercisesFromLocalStorage();
  }

  constructor() {}
}
