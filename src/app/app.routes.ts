import { Routes } from '@angular/router';
import { HomeComponent } from "./core/home/home.component";
import { AuthModule } from "./core/auth/auth.module";
import { NotFoundComponent } from "./core/not-found/not-found.component";
import { createTitle } from "./food/create-title.funtion";

export const routes: Routes = [
  {
    path: 'food',
    loadChildren: () => import('./food/food.module').then(m => m.FoodModule)
  },
  {
    path: 'training',
    loadChildren: () => import('./training/training.module').then(m => m.TrainingModule)
  },
  {
    path: 'home',
    component: HomeComponent,
    title: createTitle('Home')
  },
  {
    path: 'page-not-found',
    component: NotFoundComponent,
    title: createTitle('404 Page not found')
  },
  ...AuthModule.routes,
  {
    path: '',
    pathMatch: 'full',
    redirectTo: `/home`
  },
  {
    path: '**',
    redirectTo: 'page-not-found'
  }
];
