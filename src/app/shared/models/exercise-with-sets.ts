export interface ExerciseWithSets {
  id: string;
  name: string;
  bodyPart?: string;
  muscleTarget?: string;
  equipmentUsed?: string;
  image: string;
  setAmount: number;
  repAmount: number;
}