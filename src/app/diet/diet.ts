import { DBItem } from "../shared/table-component-abstract.directive";
import { Meal } from "../meal/meal";

export type Diet = DBItem & {
  name: string;
  description: string;
}

export type DietDetails = Diet & {
  meals: Meal[];
}

export type DietRequest = Omit<DietDetails, 'meals'> & {
  meal_ids: number[];
}
