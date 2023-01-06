import { LsExercise } from './../../../../shared/models/ls-exercise';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { LsWorkoutRoutineService } from 'src/app/shared/services/ls-workout-routine.service';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
})
export class ExerciseComponent {
  @Input() workoutExercise: LsExercise = {
    id: '',
    name: '',
    bodyPart: '',
    muscleTarget: '',
    equipmentUsed: '',
    image: '',
    repAmount: 0,
    setAmount: 0,
  };

  @Input() workoutSession: number = 0;

  @Output() exerciseDeleted = new EventEmitter<void>();


  onDeleteClick() {
    this.LsWorkoutRoutineService.deleteLsExercise(this.workoutExercise, this.workoutSession);
    this.exerciseDeleted.emit();
  }

  constructor(private LsWorkoutRoutineService: LsWorkoutRoutineService) {}
}
