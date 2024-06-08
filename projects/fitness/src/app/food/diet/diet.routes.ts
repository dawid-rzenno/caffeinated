import { DietDetailsComponent } from "./diet-details/diet-details.component";
import { dietResolver } from "./diet.resolver";
import { DietsComponent } from "./diets/diets.component";
import { DietFormComponent } from "./diet-form/diet-form.component";
import { Routes } from "@angular/router";
import { createTitle } from "../create-title.funtion";

export const dietRoutes: Routes = [
  {
    path: 'read',
    children: [
      {
        path: 'all',
        component: DietsComponent,
        resolve: {
          items: dietResolver
        },
        title: createTitle('Diets'),
      },
      {
        path: ':id',
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
