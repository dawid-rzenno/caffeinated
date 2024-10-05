import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { workoutResolver } from './workout.resolver';

describe('workoutResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => workoutResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
