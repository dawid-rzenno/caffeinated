import { ResolveFn } from '@angular/router';
import { inject } from "@angular/core";
import { Ingredient, IngredientDetails } from "./ingredient";
import { IngredientService } from "../../services/ingredient.service";

export const ingredientResolver: ResolveFn<IngredientDetails | Ingredient[]> = (route) => {

  const id: string | null = route.paramMap.get('id');

  return id ? inject(IngredientService).get(id) : inject(IngredientService).getAll()
};
