import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'food',
    loadChildren: () => import('./food/food.module').then(m => m.FoodModule)
  },
  {
    path: 'training',
    loadChildren: () => import('./training/training.module').then(m => m.TrainingModule)
  },
];
