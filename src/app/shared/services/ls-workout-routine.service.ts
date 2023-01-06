import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LsWorkoutRoutineService {
  getLsWorkoutRoutine() {
    let workoutRoutine = JSON.parse(
      localStorage.getItem('workoutRoutine') || 'null'
    );
    return workoutRoutine;
  }

  initLsWorkoutRoutine() {
    let workoutRoutine = this.getLsWorkoutRoutine();
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
      workoutExercises: [],
    });
    localStorage.setItem('workoutRoutine', JSON.stringify(workoutRoutine));
  }

  deleteLsWorkoutRoutine() {
    localStorage.removeItem('workoutRoutine');
    this.initLsWorkoutRoutine();
  }

  constructor() {}
}
