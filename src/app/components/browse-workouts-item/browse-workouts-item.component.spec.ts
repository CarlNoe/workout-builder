import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseWorkoutsItemComponent } from './browse-workouts-item.component';

describe('BrowseWorkoutsItemComponent', () => {
  let component: BrowseWorkoutsItemComponent;
  let fixture: ComponentFixture<BrowseWorkoutsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowseWorkoutsItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrowseWorkoutsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
