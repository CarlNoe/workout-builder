import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutBuilderPopupComponent } from './workout-builder-popup.component';

describe('WorkoutBuilderPopupComponent', () => {
  let component: WorkoutBuilderPopupComponent;
  let fixture: ComponentFixture<WorkoutBuilderPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkoutBuilderPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkoutBuilderPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
