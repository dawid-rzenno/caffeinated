import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { mealDetailsResolver } from './meal-details.resolver';
import { Meal } from "./meal";

describe('mealDetailsResolver', () => {
  const executeResolver: ResolveFn<Meal | false> = (...resolverParameters) =>
      TestBed.runInInjectionContext(() => mealDetailsResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
