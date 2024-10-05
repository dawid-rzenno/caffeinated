import { DBItem } from "../shared/table-component-abstract.directive";
import { Ingredient } from "../ingredient/ingredient";

export type Meal = DBItem & {
  name: string;
  description: string;
}

export type MealDetails = Meal & {
  rating: number;
  ingredients: Ingredient[]
}

export type MealRequest = Omit<MealDetails, 'ingredients'> & {
  ingredient_ids: number[];
}

