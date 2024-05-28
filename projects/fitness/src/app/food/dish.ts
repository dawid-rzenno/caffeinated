import { Ingredient } from "./ingredient";

export interface Dish {
  id: string;
  name: string;
  description: string;
  ingredients: Ingredient[]
}
