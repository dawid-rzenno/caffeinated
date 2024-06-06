import { Ingredient } from "../ingredient-details/ingredient";

export type ShoppingList = {
  id: string;
  name: string;
  description: string;
}

export type ShoppingListDetails = ShoppingList & {
  ingredients: Ingredient[]
}
