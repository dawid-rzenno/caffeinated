import { Routes } from "@angular/router";
import { ShoppingListDetailsComponent } from "./shopping-list-details/shopping-list-details.component";
import { shoppingListResolver } from "./shopping-list.resolver";
import { ShoppingListFormComponent } from "./shopping-list-form/shopping-list-form.component";
import { createTitle } from "../shared/create-title.funtion";
import { ShoppingListTableComponent } from "./shopping-list-table/shopping-list-table.component";

export const shoppingListRoutes: Routes = [
  {
    path: 'read',
    children: [
      {
        path: 'all',
        component: ShoppingListTableComponent,
        resolve: {
          paginatedResponse: shoppingListResolver
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
