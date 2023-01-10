// {"workoutRoutineName":"Dada","workoutRoutineDescription":"Erer","workoutSessions":[{"session":1,"exercises":[{"id":"628","name":"dumbbell plyo squat","bodyPart":"upper-legs","muscleTarget":"glutes","equipmentUsed":"dumbbell","image":"https://cdn.exowatts.com/images/exercises/628.gif","repAmount":"1","setAmount":"1"}]},{"session":2,"exercises":[{"id":"1002","name":"lever unilateral row","bodyPart":"back","muscleTarget":"upper-back","equipmentUsed":"leverage-machine","image":"https://cdn.exowatts.com/images/exercises/1002.gif","repAmount":"1","setAmount":"3"},{"id":"419","name":"cable underhand pulldown","bodyPart":"back","muscleTarget":"lats","equipmentUsed":"cable","image":"https://cdn.exowatts.com/images/exercises/419.gif","repAmount":"1","setAmount":"2"}]}]}

import { ExerciseWithSets } from './exercise-with-sets';

export interface WorkoutSession {
  session: number;
  exercises: ExerciseWithSets[];
}
