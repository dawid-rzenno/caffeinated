import { DBItem } from "../table-component-abstract.directive";
import { Ingredient } from "../ingredient/ingredient";

export type Meal = DBItem & {
  name: string;
  description: string;
}

export type MealDetails = Meal & {
  ingredients: Ingredient[]
}

