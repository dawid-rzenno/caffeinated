import { ResolveFn } from '@angular/router';
import { inject } from "@angular/core";
import { ShoppingList, ShoppingListDetails } from "./shopping-list";
import { ShoppingListService } from "../../services/shopping-list.service";

export const shoppingListResolver: ResolveFn<ShoppingListDetails | ShoppingList[]> = (route) => {

  const id: string | null = route.paramMap.get('id');

  return id ? inject(ShoppingListService).get(id) : inject(ShoppingListService).getAll()
};
