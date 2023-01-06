import { Component, Input } from '@angular/core';
import { Exercise } from 'src/app/shared/models/exercise';
import { LsWorkoutRoutineService } from 'src/app/shared/services/ls-workout-routine.service';
@Component({
  selector: 'app-workout-builder',
  templateUrl: './workout-builder.component.html',
})
export class WorkoutBuilderComponent {
  @Input() selectedExercise: Exercise | undefined;

  currentPopupSession: number = 0;
  showPopup: boolean = false;

  workoutRoutineName: string = '';
  workoutRoutineDescription: string = '';
  workoutSessions: any[] = [];

  togglePopup() {
    this.showPopup = !this.showPopup;
  }

  updateWorkoutSessions() {
    this.workoutSessions =
      this.LsWorkoutRoutineService.getLsWorkoutRoutine().workoutSessions;
  }

  onExerciseSelected(exercise: any) {
    console.log(exercise);
  }

  onWorkoutNameChanged(event: Event) {
    const workoutRoutineName = (event.target as HTMLInputElement).value;
    this.LsWorkoutRoutineService.updateLsWorkoutName(workoutRoutineName);
  }

  onWorkoutDescriptionChanged(event: Event) {
    const workoutRoutineDescription = (event.target as HTMLInputElement).value;
    this.LsWorkoutRoutineService.updateLsWorkoutDescription(
      workoutRoutineDescription
    );
  }

  onAddSessionClick() {
    this.LsWorkoutRoutineService.addLsWorkoutSession();
    this.updateWorkoutSessions();
  }

  onDeleteWorkoutRoutineClick() {
    this.LsWorkoutRoutineService.deleteLsWorkoutRoutine();
    this.updateWorkoutSessions();
    this.workoutRoutineName = '';
    this.workoutRoutineDescription = '';

    const nameInput = document.getElementById('workout-name') as HTMLInputElement;
    const descriptionTextarea = document.getElementById(
      'workout-description'
    ) as HTMLTextAreaElement;

    nameInput.value = '';
    descriptionTextarea.value = '';
  }

  ngOnInit() {
    let workoutRoutine = this.LsWorkoutRoutineService.getLsWorkoutRoutine();

    if (!workoutRoutine) {
      this.LsWorkoutRoutineService.initLsWorkoutRoutine();
      workoutRoutine = this.LsWorkoutRoutineService.getLsWorkoutRoutine();
    }
    this.workoutRoutineName = workoutRoutine.workoutRoutineName;
    this.workoutRoutineDescription = workoutRoutine.workoutRoutineDescription;
    this.workoutSessions = workoutRoutine.workoutSessions;
  }

  constructor(private LsWorkoutRoutineService: LsWorkoutRoutineService) {}
}
