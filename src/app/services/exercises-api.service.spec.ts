import { TestBed } from '@angular/core/testing';

import { ExercisesApiService } from './exercises-api.service';

describe('ExercisesApiService', () => {
  let service: ExercisesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExercisesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
