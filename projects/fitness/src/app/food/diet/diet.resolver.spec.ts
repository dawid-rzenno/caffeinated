import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { dietDetailsResolver } from './diet-details.resolver';
import { Diet } from "./diet";

describe('dietResolver', () => {
  const executeResolver: ResolveFn<Diet | false> = (...resolverParameters) =>
      TestBed.runInInjectionContext(() => dietDetailsResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
