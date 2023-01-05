import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ExercisesApiService } from 'src/app/shared/services/exercises-api.service';
import { Exercise } from 'src/app/shared/models/exercise';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
})
export class PopupComponent {
  @Output() closePopup = new EventEmitter<void>();

  exercises: Exercise[] = [];

  selectedExercise: Exercise = {
    id: '',
    name: '',
    bodyPart: '',
    muscleTarget: '',
    equipmentUsed: '',
    image: '',
  };

  repAmount: number = 0;
  setAmount: number = 0;

  addExerciseToLocalStorage() {
    let exercises = JSON.parse(
      localStorage.getItem('exercises') || '[]'
    );

    exercises.push({
      ...this.selectedExercise,
      repAmount: this.repAmount,
      setAmount: this.setAmount,
    });

    localStorage.setItem('exercises', JSON.stringify(exercises));
  }

  onRepAmountChange(event: any) {
    this.repAmount = event.target.value;
  }

  onSetAmountChange(event: any) {
    this.setAmount = event.target.value;
  }

  onExerciseSelect(exercise: Exercise) {
    this.selectedExercise = exercise;
  }

  onAddExerciseClick() {
    this.addExerciseToLocalStorage();
    this.closePopup.emit();
  }

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
