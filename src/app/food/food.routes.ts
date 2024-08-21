import { Routes } from "@angular/router";

export const foodRoutes: Routes = [
  {
    path: 'diet',
    loadChildren: () => import('./diet/diet.module').then(m => m.DietModule)
  },
  {
    path: 'meal',
    loadChildren: () => import('./meal/meal.module').then(m => m.MealModule)
  },
  {
    path: 'ingredient',
    loadChildren: () => import('./ingredient/ingredient.module').then(m => m.IngredientModule)
  },
  {
    path: 'shopping-list',
    loadChildren: () => import('./shopping-list/shopping-list.module').then(m => m.ShoppingListModule)
  },
]
