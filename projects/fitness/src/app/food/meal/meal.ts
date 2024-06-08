import { DBItem } from "../items-component.abstract";
import { IngredientDetails } from "../ingredient/ingredient";

export type Meal = DBItem & {
  name: string;
  description: string;
}

export type MealDetails = Meal & {
  ingredients: IngredientDetails[]
}

