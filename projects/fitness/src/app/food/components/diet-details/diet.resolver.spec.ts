import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { dietResolver } from './diet.resolver';
import { Diet, DietDetails } from "./diet";

describe('dietResolver', () => {
  const executeResolver: ResolveFn<Diet[] | DietDetails> = (...resolverParameters) =>
      TestBed.runInInjectionContext(() => dietResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
