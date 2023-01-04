import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutBuilderExerciseComponent } from './workout-builder-exercise.component';

describe('WorkoutBuilderExerciseComponent', () => {
  let component: WorkoutBuilderExerciseComponent;
  let fixture: ComponentFixture<WorkoutBuilderExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkoutBuilderExerciseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkoutBuilderExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
