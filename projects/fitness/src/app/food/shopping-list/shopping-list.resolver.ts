import { ResolveFn } from '@angular/router';
import { inject } from "@angular/core";
import { FoodService } from "../food.service";
import { ShoppingList } from "./shopping-list";

export const shoppingListResolver: ResolveFn<ShoppingList | false> = (route) => {

  const id: string | null = route.paramMap.get('id');

  return id ? inject(FoodService).getShoppingList(id) : false
};
