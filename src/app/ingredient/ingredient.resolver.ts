import { ResolveFn } from '@angular/router';
import { inject } from "@angular/core";
import { Ingredient, IngredientDetails } from "./ingredient";
import { IngredientService } from "./ingredient.service";
import { PaginatedResponse } from "../shared/models/paginated-response";

export const ingredientResolver: ResolveFn<IngredientDetails | PaginatedResponse<Ingredient>> = (route) => {

  const id: string | null = route.paramMap.get('id');

  return id ? inject(IngredientService).get(id) : inject(IngredientService).getAll()
};
