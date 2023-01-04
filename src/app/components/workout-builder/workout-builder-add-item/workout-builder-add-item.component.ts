import { Component, ViewChild } from '@angular/core';
import { WorkoutBuilderPopupComponent } from '../workout-builder-popup/workout-builder-popup.component';

@Component({
  selector: 'app-workout-builder-add-item',
  templateUrl: './workout-builder-add-item.component.html',
})
export class WorkoutBuilderAddItemComponent {
  @ViewChild('popup', { static: false }) popup:
    | WorkoutBuilderPopupComponent
    | undefined;
}
