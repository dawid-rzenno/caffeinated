import { ResolveFn } from '@angular/router';

export const workoutResolver: ResolveFn<boolean> = (route, state) => {
  return true;
};
