import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { beverageResolver } from './beverage.resolver';

describe('beverageResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => beverageResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
