import { Route } from "@angular/router";
import { ingredientResolver } from "./ingredient.resolver";
import { createTitle } from "../shared/create-title.funtion";
import { IngredientDetailsComponent } from "./ingredient-details/ingredient-details.component";
import { IngredientFormComponent } from "./ingredient-form/ingredient-form.component";
import { IngredientTableComponent } from "./ingredient-table/ingredient-table.component";

export const ingredientRoutes: Route[] = [
  {
    path: 'read',
    children: [
      {
        path: 'all',
        component: IngredientTableComponent,
        resolve: {
          paginatedResponse: ingredientResolver
        },
        title: createTitle('Ingredients'),
      },
      {
        path: ':id',
        component: IngredientDetailsComponent,
        resolve: {
          details: ingredientResolver
        },
        title: createTitle('Ingredient Details'),
      },
    ]
  },
  {
    path: 'create',
    component: IngredientFormComponent,
    title: createTitle('New Ingredient'),
  },
  {
    path: 'edit/:id',
    component: IngredientFormComponent,
    resolve: {
      details: ingredientResolver
    },
    title: createTitle('Edit Ingredient'),
  }
]
