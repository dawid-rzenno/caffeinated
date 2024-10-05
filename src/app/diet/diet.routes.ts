import { DietDetailsComponent } from "./diet-details/diet-details.component";
import { dietResolver } from "./diet.resolver";
import { DietFormComponent } from "./diet-form/diet-form.component";
import { Routes } from "@angular/router";
import { createTitle } from "../shared/create-title.funtion";
import { DietTableComponent } from "./diet-table/diet-table.component";

export const dietRoutes: Routes = [
  {
    path: 'read',
    children: [
      {
        path: 'all',
        component: DietTableComponent,
        resolve: {
          paginatedResponse: dietResolver
        },
        title: createTitle('Diets'),
      },
      {
        path: 'details/:id',
        component: DietDetailsComponent,
        resolve: {
          details: dietResolver
        },
        title: createTitle('Diet Details'),
      },
    ]
  },
  {
    path: 'create',
    component: DietFormComponent,
    title: createTitle('New Diet'),
  },
  {
    path: 'edit/:id',
    component: DietFormComponent,
    resolve: {
      details: dietResolver
    },
    title: createTitle('Edit Diet'),
  }
]
