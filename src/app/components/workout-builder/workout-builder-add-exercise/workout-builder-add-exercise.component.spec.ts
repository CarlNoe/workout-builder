import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutBuilderAddExerciseComponent } from './workout-builder-add-exercise.component';

describe('WorkoutBuilderAddExerciseComponent', () => {
  let component: WorkoutBuilderAddExerciseComponent;
  let fixture: ComponentFixture<WorkoutBuilderAddExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkoutBuilderAddExerciseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkoutBuilderAddExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
