import { Injectable } from '@angular/core';

import { WorkoutRoutine } from 'src/app/shared/models/workout-routine';
import { WorkoutSession } from 'src/app/shared/models/workout-session';
import { ExerciseWithSets } from '../models/exercise-with-sets';

@Injectable({
  providedIn: 'root',
})
export class LsWorkoutRoutineService {
  getLsWorkoutRoutine(): WorkoutRoutine {
    const lsWorkoutRoutine: string | null =
      localStorage.getItem('workoutRoutine');

    if (lsWorkoutRoutine === null) {
      throw new Error('workoutRoutine is null');
    }

    return JSON.parse(lsWorkoutRoutine);
  }

  getLsSession(sessionNumber: number) {
    let lsWorkoutRoutine: WorkoutRoutine = this.getLsWorkoutRoutine();
    let lsAllSessions: WorkoutSession[] = lsWorkoutRoutine.workoutSessions;

    return lsAllSessions.find(
      (lsSession: WorkoutSession) => lsSession.session === sessionNumber
    );
  }

  getLsSessionExercise(exercise: ExerciseWithSets, session: WorkoutSession) {
    let lsSessionAllExercises: ExerciseWithSets[] = session.exercises;
    return lsSessionAllExercises.find(
      (matchingExercise: ExerciseWithSets) => matchingExercise === exercise
    );
  }

  getLsSessionExerciseIndex(
    exercise: ExerciseWithSets,
    session: WorkoutSession
  ): number {
    let lsSessionAllExercises: ExerciseWithSets[] = session.exercises;
    return lsSessionAllExercises.indexOf(exercise);
  }

  initLsWorkoutRoutine() {
    let workoutRoutine: WorkoutRoutine = this.getLsWorkoutRoutine();
    if (!workoutRoutine) {
      workoutRoutine = {
        workoutRoutineName: '',
        workoutRoutineDescription: '',
        workoutSessions: [],
      };
    }
    localStorage.setItem('workoutRoutine', JSON.stringify(workoutRoutine));
  }

  updateLsWorkoutName(workoutRoutineName: string) {
    let workoutRoutine = this.getLsWorkoutRoutine();
    workoutRoutine.workoutRoutineName = workoutRoutineName;
    localStorage.setItem('workoutRoutine', JSON.stringify(workoutRoutine));
  }

  updateLsWorkoutDescription(workoutRoutineDescription: string) {
    let workoutRoutine = this.getLsWorkoutRoutine();
    workoutRoutine.workoutRoutineDescription = workoutRoutineDescription;
    localStorage.setItem('workoutRoutine', JSON.stringify(workoutRoutine));
  }

  addLsWorkoutSession() {
    let workoutRoutine = this.getLsWorkoutRoutine();
    workoutRoutine.workoutSessions.push({
      session: workoutRoutine.workoutSessions.length + 1,
      exercises: [],
    });
    localStorage.setItem('workoutRoutine', JSON.stringify(workoutRoutine));
  }

  deleteLsWorkoutRoutine() {
    localStorage.removeItem('workoutRoutine');
    this.initLsWorkoutRoutine();
  }

  updateLsWorkoutRoutine(workoutRoutine: WorkoutRoutine) {
    localStorage.setItem('workoutRoutine', JSON.stringify(workoutRoutine));
  }

  deleteLsExercise(exercise: ExerciseWithSets, sessionNumber: number) {
    let lsSession: WorkoutSession | undefined =
      this.getLsSession(sessionNumber);

    if (lsSession === undefined) {
      throw new Error('lsWorkoutSession is undefined');
    }

    let lsSessionExercise = this.getLsSessionExercise(exercise, lsSession);

    if (lsSessionExercise === undefined) {
      throw new Error('lsSessionExercise is undefined');
    }

    let lsSessionExerciseIndex = this.getLsSessionExerciseIndex(
      lsSessionExercise,
      lsSession
    );

    if (lsSessionExerciseIndex === -1) {
      throw new Error('lsSessionExercise not found in array');
    }

    lsSession.exercises.splice(lsSessionExerciseIndex, 1);

    this.updateLsWorkoutRoutine(this.getLsWorkoutRoutine());
  }

  constructor() {}
}
