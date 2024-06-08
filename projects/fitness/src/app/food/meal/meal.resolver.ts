import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { inject } from "@angular/core";
import { Meal, MealDetails } from "./meal";
import { MealService } from "./meal.service";

export const mealResolver: ResolveFn<MealDetails | Meal[]> = (route: ActivatedRouteSnapshot) => {

  const id: string | null = route.paramMap.get('id');

  return id ? inject(MealService).get(id) : inject(MealService).getAll()
};
