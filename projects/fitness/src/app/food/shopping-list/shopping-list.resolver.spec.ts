import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { shoppingListResolver } from './shopping-list.resolver';

describe('shoppingListResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => shoppingListResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
