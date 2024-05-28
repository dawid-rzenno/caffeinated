import { Routes } from "@angular/router";
import { DishComponent } from "./dish/dish.component";
import { dishResolver } from "./dish.resolver";

export const routes: Routes = [
  {
    path: 'dish/:id',
    component: DishComponent,
    data: {
      title: 'Dish details',
    },
    resolve: {
      dish: dishResolver
    }
  },
]
