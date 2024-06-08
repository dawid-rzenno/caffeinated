import { Route } from "@angular/router";
import { MealFormComponent } from "./meal-form/meal-form.component";
import { MealDetailsComponent } from "./meal-details/meal-details.component";
import { mealResolver } from "./meal.resolver";
import { MealsComponent } from "./meals/meals.component";
import { createTitle } from "../create-title.funtion";

export const mealRoutes: Route[] = [
  {
    path: 'read',
    children: [
      {
        path: 'all',
        component: MealsComponent,
        resolve: {
          items: mealResolver
        },
        title: createTitle('Meals'),
      },
      {
        path: ':id',
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
