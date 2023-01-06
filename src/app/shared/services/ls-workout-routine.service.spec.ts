import { TestBed } from '@angular/core/testing';

import { LsWorkoutRoutineService } from './ls-workout-routine.service';

describe('LsWorkoutRoutineService', () => {
  let service: LsWorkoutRoutineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LsWorkoutRoutineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
