import { IngredientDetails } from "../ingredient-details/ingredient";
import { DBItem } from "../../abstracts/items-component.abstract";

export type Meal = DBItem & {
  name: string;
  description: string;
}

export type MealDetails = Meal & {
  ingredients: IngredientDetails[]
}

