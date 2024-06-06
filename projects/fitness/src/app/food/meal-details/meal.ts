import { IngredientDetails } from "../ingredient-details/ingredient";

export type Meal = {
  id: string;
  name: string;
  description: string;
}

export type MealDetails = Meal & {
  ingredients: IngredientDetails[]
}

