import { WorkoutExercise } from 'src/app/shared/models/workout-exercise';
import { Component, Input } from '@angular/core';
import { LsWorkoutRoutineService } from 'src/app/shared/services/ls-workout-routine.service';

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

  @Input() workoutSession: number = 0;

  deleteLsExercise() {
    let workoutRoutine = this.LsWorkoutRoutineService.getLsWorkoutRoutine();

    let workoutSession = workoutRoutine.workoutSessions.find(
      (session: any) => session.session === this.workoutSession
    );

    workoutSession.exercises = workoutSession.exercises.filter(
      (exercise: any) => exercise.id !== this.workoutExercise.id
    );

    localStorage.setItem('workoutRoutine', JSON.stringify(workoutRoutine));
  }

  constructor(private LsWorkoutRoutineService: LsWorkoutRoutineService) {}
}
