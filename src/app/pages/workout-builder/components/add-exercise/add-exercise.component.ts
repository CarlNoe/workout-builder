import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-add-exercise',
  templateUrl: './add-exercise.component.html',
})
export class AddExerciseComponent {
  @Output() togglePopup = new EventEmitter<void>();
  @Input() workoutSession: number = 0;
}
