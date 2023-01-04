import { Component, Input } from '@angular/core';
import { Exercise } from 'src/app/shared/models/exercise';

@Component({
  selector: 'app-workout-builder',
  templateUrl: './workout-builder.component.html',
})
export class WorkoutBuilderComponent {
  @Input() selectedExercise: Exercise | undefined;

  showPopup: boolean = false;

  togglePopup() {
    this.showPopup = !this.showPopup;
  }

  onExerciseSelected(exercise: any) {
    console.log(exercise);
  }
}
