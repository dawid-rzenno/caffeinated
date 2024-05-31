import { Routes } from "@angular/router";
import { MealComponent } from "./meal/meal.component";
import { mealDetailsResolver } from "./meal/meal-details.resolver";
import { DietComponent } from "./diet/diet.component";
import { dietDetailsResolver } from "./diet/diet-details.resolver";
import { shoppingListResolver } from "./shopping-list/shopping-list.resolver";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

export const routes: Routes = [
  {
    path: 'meal/:id',
    component: MealComponent,
    resolve: {
      meal: mealDetailsResolver
    },
    title: 'Meal Details | Caffeinated Fitness',
  },
  {
    path: 'diet/:id',
    component: DietComponent,
    resolve: {
      diet: dietDetailsResolver
    },
    title: 'Diet Details | Caffeinated Fitness',
  },
  {
    path: 'shopping-list/:id',
    component: ShoppingListComponent,
    resolve: {
      shoppingList: shoppingListResolver
    },
    title: 'Shopping List | Caffeinated Fitness',
  }
]
