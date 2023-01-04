import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-workout-builder-add-exercise',
  templateUrl: './workout-builder-add-exercise.component.html',
})
export class WorkoutBuilderAddExerciseComponent {
  @Output() togglePopup = new EventEmitter<void>();
}
