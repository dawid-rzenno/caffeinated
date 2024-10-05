import { ResolveFn } from '@angular/router';
import { inject } from "@angular/core";
import { ShoppingList, ShoppingListDetails } from "./shopping-list";
import { ShoppingListService } from "./shopping-list.service";
import { PaginatedResponse } from "../shared/models/paginated-response";

export const shoppingListResolver: ResolveFn<ShoppingListDetails | PaginatedResponse<ShoppingList>> = (route) => {

  const id: string | null = route.paramMap.get('id');

  return id ? inject(ShoppingListService).get(id) : inject(ShoppingListService).getAll()
};
