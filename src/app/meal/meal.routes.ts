import { Route } from "@angular/router";
import { MealFormComponent } from "./meal-form/meal-form.component";
import { MealDetailsComponent } from "./meal-details/meal-details.component";
import { mealResolver } from "./meal.resolver";
import { createTitle } from "../shared/create-title.funtion";
import { MealTableComponent } from "./meal-table/meal-table.component";

export const mealRoutes: Route[] = [
  {
    path: 'read',
    children: [
      {
        path: 'all',
        component: MealTableComponent,
        resolve: {
          paginatedResponse: mealResolver
        },
        title: createTitle('Meals'),
      },
      {
        path: 'details/:id',
        component: MealDetailsComponent,
        resolve: {
          details: mealResolver
        },
        title: createTitle('Meal Details'),
      },
    ]
  },
  {
    path: 'create',
    component: MealFormComponent,
    title: createTitle('New Meal'),
  },
  {
    path: 'edit/:id',
    component: MealFormComponent,
    resolve: {
      details: mealResolver
    },
    title: createTitle('Edit Meal'),
  }
]
