import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutBuilderItemComponent } from './workout-builder-item.component';

describe('WorkoutBuilderItemComponent', () => {
  let component: WorkoutBuilderItemComponent;
  let fixture: ComponentFixture<WorkoutBuilderItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkoutBuilderItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkoutBuilderItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
