import { DBItem } from "../items-component.abstract";
import { Meal } from "../meal/meal";

export type Diet = DBItem & {
  name: string;
  description: string;
}

export type DietDetails = Diet & {
  meals: Meal[];
}
