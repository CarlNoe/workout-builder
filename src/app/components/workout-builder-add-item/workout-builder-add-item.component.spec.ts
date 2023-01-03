import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutBuilderAddItemComponent } from './workout-builder-add-item.component';

describe('WorkoutBuilderAddItemComponent', () => {
  let component: WorkoutBuilderAddItemComponent;
  let fixture: ComponentFixture<WorkoutBuilderAddItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkoutBuilderAddItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkoutBuilderAddItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
