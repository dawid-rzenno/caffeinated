import { ResolveFn } from '@angular/router';

export const exerciseResolver: ResolveFn<boolean> = (route, state) => {
  return true;
};
