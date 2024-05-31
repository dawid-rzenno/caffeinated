import { IngredientDetails } from "./ingredient";

export type Meal = {
  id: string;
  name: string;
  description: string;
}

export type MealDetails = Meal & {
  ingredients: IngredientDetails[]
}

