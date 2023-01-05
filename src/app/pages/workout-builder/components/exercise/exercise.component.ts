import { WorkoutExercise } from 'src/app/shared/models/workout-exercise';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
})
export class ExerciseComponent {
  @Input() workoutExercise: WorkoutExercise = {
    id: '',
    name: '',
    bodyPart: '',
    muscleTarget: '',
    equipmentUsed: '',
    image: '',
    repAmount: 0,
    setAmount: 0,
  };
}
