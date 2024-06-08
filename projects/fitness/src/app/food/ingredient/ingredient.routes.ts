import { Route } from "@angular/router";
import { ingredientResolver } from "./ingredient.resolver";
import { createTitle } from "../create-title.funtion";
import { IngredientDetailsComponent } from "./ingredient-details/ingredient-details.component";
import { IngredientFormComponent } from "./ingredient-form/ingredient-form.component";
import { IngredientsComponent } from "./ingredients/ingredients.component";

export const ingredientRoutes: Route[] = [
  {
    path: 'read',
    children: [
      {
        path: 'all',
        component: IngredientsComponent,
        resolve: {
          items: ingredientResolver
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
