import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-exercise',
  templateUrl: './add-exercise.component.html',
})
export class AddExerciseComponent {
  @Output() togglePopup = new EventEmitter<void>();
}
