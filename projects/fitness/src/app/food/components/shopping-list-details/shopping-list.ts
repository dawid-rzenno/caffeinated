import { Ingredient } from "../ingredient-details/ingredient";
import { DBItem } from "../../abstracts/items-component.abstract";

export type ShoppingList = DBItem & {
  name: string;
  description: string;
}

export type ShoppingListDetails = ShoppingList & {
  ingredients: Ingredient[]
}
