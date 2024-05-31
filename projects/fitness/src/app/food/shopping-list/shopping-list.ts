import { Ingredient } from "../meal/ingredient";

export type ShoppingList = {
  id: string;
  name: string;
  description: string;
}

export type ShoppingListDetails = ShoppingList & {
  ingredients: Ingredient[]
}
