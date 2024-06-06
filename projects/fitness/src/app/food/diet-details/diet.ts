import { Meal } from "../meal-details/meal";

export type Diet = {
  id: string;
  name: string;
  description: string;
}

export type DietDetails = Diet & {
  meals: Meal[];
}
