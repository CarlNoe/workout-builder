import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseWorkoutsComponent } from './browse-workouts.component';

describe('BrowseWorkoutsComponent', () => {
  let component: BrowseWorkoutsComponent;
  let fixture: ComponentFixture<BrowseWorkoutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowseWorkoutsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrowseWorkoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
