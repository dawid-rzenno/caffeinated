import { ResolveFn } from '@angular/router';

export const beverageResolver: ResolveFn<boolean> = (route, state) => {
  return true;
};
