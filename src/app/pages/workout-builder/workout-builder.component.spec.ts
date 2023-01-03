import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutBuilderComponent } from './workout-builder.component';

describe('WorkoutBuilderComponent', () => {
  let component: WorkoutBuilderComponent;
  let fixture: ComponentFixture<WorkoutBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkoutBuilderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkoutBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
