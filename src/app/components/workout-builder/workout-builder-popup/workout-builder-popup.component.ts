import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ExercisesApiService } from 'src/app/services/exercises-api.service';
import { Exercise } from 'src/app/models/exercise';
@Component({
  selector: 'app-workout-builder-popup',
  templateUrl: './workout-builder-popup.component.html',
})
export class WorkoutBuilderPopupComponent {
  @Output() exerciseSelected = new EventEmitter<Exercise>();
  @Output() closePopup = new EventEmitter<void>();
  exercises: Exercise[] = [];

  onBackgroundClick(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      this.closePopup.emit();
    }
  }
  
  ngOnInit(): void {
    this.exercisesApiService.getExercises().subscribe((data: any) => {
      this.exercises = data;
    });
  }

  constructor(private exercisesApiService: ExercisesApiService) {}
}
