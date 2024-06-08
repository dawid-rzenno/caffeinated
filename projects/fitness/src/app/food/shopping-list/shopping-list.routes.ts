import { Routes } from "@angular/router";
import { ShoppingListDetailsComponent } from "./shopping-list-details/shopping-list-details.component";
import { shoppingListResolver } from "./shopping-list.resolver";
import { ShoppingListsComponent } from "./shopping-lists/shopping-lists.component";
import { ShoppingListFormComponent } from "./shopping-list-form/shopping-list-form.component";

import { createTitle } from "../create-title.funtion";

export const shoppingListRoutes: Routes = [
  {
    path: 'read',
    children: [
      {
        path: 'all',
        component: ShoppingListsComponent,
        resolve: {
          items: shoppingListResolver
        },
        title: createTitle('Shopping Lists'),
      },
      {
        path: ':id',
        component: ShoppingListDetailsComponent,
        resolve: {
          details: shoppingListResolver
        },
        title: createTitle('Shopping List Details'),
      },
    ]
  },
  {
    path: 'create',
    component: ShoppingListFormComponent,
    title: createTitle('New Shopping List'),
  },
  {
    path: 'edit/:id',
    component: ShoppingListFormComponent,
    resolve: {
      details: shoppingListResolver
    },
    title: createTitle('Edit Shopping List'),
  }
]
