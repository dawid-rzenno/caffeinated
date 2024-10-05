import { Route } from "@angular/router";
import { ingredientResolver } from "../ingredient/ingredient.resolver";
import { createTitle } from "../shared/create-title.funtion";
import { BeverageTableComponent } from "./beverage-table/beverage-table.component";
import { BeverageFormComponent } from "./beverage-form/beverage-form.component";
import { BeverageDetailsComponent } from "./beverage-details/beverage-details.component";

export const beverageRoutes: Route[] = [
  {
    path: 'read',
    children: [
      {
        path: 'all',
        component: BeverageTableComponent,
        resolve: {
          paginatedResponse: ingredientResolver
        },
        title: createTitle('Beverages'),
      },
      {
        path: ':id',
        component: BeverageDetailsComponent,
        resolve: {
          details: ingredientResolver
        },
        title: createTitle('Beverage Details'),
      },
    ]
  },
  {
    path: 'create',
    component: BeverageFormComponent,
    title: createTitle('New Beverage'),
  },
  {
    path: 'edit/:id',
    component: BeverageFormComponent,
    resolve: {
      details: ingredientResolver
    },
    title: createTitle('Edit Beverage'),
  }
]
