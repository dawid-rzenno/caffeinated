import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { mealResolver } from './meal.resolver';
import { Meal, MealDetails } from "./meal";

describe('mealResolver', () => {
  const executeResolver: ResolveFn<Meal[] | MealDetails> = (...resolverParameters) =>
      TestBed.runInInjectionContext(() => mealResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
