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

  deleteWorkoutExerciseFromLocalStorage() {
    let exercises = JSON.parse(localStorage.getItem('exercises') || '[]');

    exercises = exercises.filter(
      (exercise: WorkoutExercise) => exercise.id !== this.workoutExercise.id
    );

    localStorage.setItem('exercises', JSON.stringify(exercises));
  }
}
