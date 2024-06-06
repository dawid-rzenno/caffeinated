import { Routes } from "@angular/router";
import { MealDetailsComponent } from "./meal-details/meal-details.component";
import { mealDetailsResolver } from "./meal-details/meal-details.resolver";
import { DietDetailsComponent } from "./diet-details/diet-details.component";
import { dietDetailsResolver } from "./diet-details/diet-details.resolver";
import { shoppingListDetailsResolver } from "./shopping-list-details/shopping-list-details.resolver";
import { ShoppingListDetailsComponent } from "./shopping-list-details/shopping-list-details.component";

export function createTitle(pathTitle: string): string {
  return `${pathTitle} | Caffeinated Fitness`;
}

export const routes: Routes = [
  {
    path: 'meal/:id',
    component: MealDetailsComponent,
    resolve: {
      details: mealDetailsResolver
    },
    title: createTitle('Meal Details'),
  },
  {
    path: 'diet/:id',
    component: DietDetailsComponent,
    resolve: {
      details: dietDetailsResolver
    },
    title: createTitle('Diet Details Details'),
  },
  {
    path: 'shopping-list/:id',
    component: ShoppingListDetailsComponent,
    resolve: {
      details: shoppingListDetailsResolver
    },
    title: createTitle('Shopping List Details'),
  }
]
