import { WorkoutSession } from './workout-session';

export interface WorkoutRoutine {
  workoutRoutineName: string;
  workoutRoutineDescription: string;
  workoutSessions: WorkoutSession[];
}
