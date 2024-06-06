import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { inject } from "@angular/core";
import { FoodService } from "../food.service";
import { MealDetails } from "./meal";

export const mealDetailsResolver: ResolveFn<MealDetails | false> = (route: ActivatedRouteSnapshot) => {

  const id: string | null = route.paramMap.get('id');

  return id ? inject(FoodService).getMeal(id) : false
};
