import { Routes } from '@angular/router';
import { DashboardComponent } from "./core/home/dashboard.component";
import { AuthModule } from "./core/auth/auth.module";
import { NotFoundComponent } from "./core/not-found/not-found.component";
import { createTitle } from "./create-title.funtion";

export const routes: Routes = [
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
  {
    path: 'training',
    loadChildren: () => import('./training/training.module').then(m => m.TrainingModule)
  },
  ...AuthModule.routes,
  {
    path: 'dashboard',
    pathMatch: 'full',
    component: DashboardComponent,
    title: createTitle('Dashboard')
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: `/dashboard`
  },
  {
    path: 'page-not-found',
    component: NotFoundComponent,
    title: createTitle('404 Page not found')
  },
  {
    path: '**',
    redirectTo: 'page-not-found'
  }
];
