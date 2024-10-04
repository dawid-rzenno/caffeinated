import { DBItem } from "../table-component-abstract.directive";
import { Ingredient } from "../ingredient/ingredient";

export type ShoppingList = DBItem & {
  name: string;
  description: string;
}

export type ShoppingListDetails = ShoppingList & {
  ingredients: Ingredient[]
}

export type ShoppingListRequest = Omit<ShoppingListDetails, 'ingredients'> & {
  ingredient_ids: number[];
}
