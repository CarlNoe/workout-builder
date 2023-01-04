import { Component, OnInit } from '@angular/core';
import { ExercisesApiService } from 'src/app/services/exercises-api.service';
@Component({
  selector: 'app-workout-builder-popup',
  templateUrl: './workout-builder-popup.component.html',
})
export class WorkoutBuilderPopupComponent {
  isOpen: boolean = false;
  exercises:any = [];

  toggle() {
    this.isOpen = !this.isOpen;
  }

  onBackgroundClick(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      this.toggle();
    }
  }

  ngOnInit(): void {
    this.exercisesApiService
      .getExercises().subscribe((data: any) => {
        this.exercises = data;
      }
    );
  }

  constructor(private exercisesApiService: ExercisesApiService) {}
}
