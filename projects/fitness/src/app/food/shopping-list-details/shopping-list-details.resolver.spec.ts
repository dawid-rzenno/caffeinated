import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { shoppingListDetailsResolver } from './shopping-list-details.resolver';

describe('shoppingListDetailsResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) =>
      TestBed.runInInjectionContext(() => shoppingListDetailsResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
