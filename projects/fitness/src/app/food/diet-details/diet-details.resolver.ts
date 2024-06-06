import { ResolveFn } from '@angular/router';
import { inject } from "@angular/core";
import { FoodService } from "../food.service";
import { DietDetails } from "./diet";

export const dietDetailsResolver: ResolveFn<DietDetails | false> = (route) => {

  const id: string | null = route.paramMap.get('id');

  return id ? inject(FoodService).getDiet(id) : false
};
