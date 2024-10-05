import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { inject } from "@angular/core";
import { Meal, MealDetails } from "./meal";
import { MealService } from "./meal.service";
import { PaginatedResponse } from "../shared/models/paginated-response";

export const mealResolver: ResolveFn<MealDetails | PaginatedResponse<Meal>> = (route: ActivatedRouteSnapshot) => {

  const id: string | null = route.paramMap.get('id');

  return id ? inject(MealService).get(id) : inject(MealService).getAll()
};
