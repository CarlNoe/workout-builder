import { Component, ViewChild } from '@angular/core';
import { WorkoutBuilderPopupComponent } from '../workout-builder-popup/workout-builder-popup.component';

@Component({
  selector: 'app-workout-builder-add-exercise',
  templateUrl: './workout-builder-add-exercise.component.html',
})
export class WorkoutBuilderAddExerciseComponent {
  @ViewChild('popup', { static: false }) popup:
    | WorkoutBuilderPopupComponent
    | undefined;
}
