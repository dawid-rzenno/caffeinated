import { DBItem } from "../../abstracts/items-component.abstract";
import { Meal } from "../meal-details/meal";

export type Diet = DBItem & {
  name: string;
  description: string;
}

export type DietDetails = Diet & {
  meals: Meal[];
}
