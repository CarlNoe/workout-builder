import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-add-exercise',
  templateUrl: './add-exercise.component.html',
})
export class AddExerciseComponent {
  @Input() popupSession: number = 0;

  @Output() openPopup = new EventEmitter<number>();
}
