import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { inject } from "@angular/core";
import { FoodService } from "./food.service";
import { Dish } from "./dish";

export const dishResolver: ResolveFn<Dish | false> = (route: ActivatedRouteSnapshot) => {

  const id: string | null = route.paramMap.get('id');

  return id ? inject(FoodService).getDish(id) : false
};
