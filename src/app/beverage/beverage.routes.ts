import { Route } from "@angular/router";
import { createTitle } from "../shared/create-title.funtion";
import { BeverageTableComponent } from "./beverage-table/beverage-table.component";
import { BeverageFormComponent } from "./beverage-form/beverage-form.component";
import { BeverageDetailsComponent } from "./beverage-details/beverage-details.component";
import { beverageResolver } from "./beverage.resolver";

export const beverageRoutes: Route[] = [
  {
    path: 'read',
    children: [
      {
        path: 'all',
        component: BeverageTableComponent,
        resolve: {
          paginatedResponse: beverageResolver
        },
        title: createTitle('Beverages'),
      },
      {
        path: ':id',
        component: BeverageDetailsComponent,
        resolve: {
          details: beverageResolver
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
      details: beverageResolver
    },
    title: createTitle('Edit Beverage'),
  }
]
