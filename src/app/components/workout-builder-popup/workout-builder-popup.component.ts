import { Component } from '@angular/core';

@Component({
  selector: 'app-workout-builder-popup',
  templateUrl: './workout-builder-popup.component.html',
})
export class WorkoutBuilderPopupComponent {
  isOpen: boolean = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  onBackgroundClick(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      this.toggle();
    }
  }
}
