import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { dishResolver } from './dish.resolver';
import { Dish } from "./dish";

describe('dishResolver', () => {
  const executeResolver: ResolveFn<Dish | false> = (...resolverParameters) =>
      TestBed.runInInjectionContext(() => dishResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
