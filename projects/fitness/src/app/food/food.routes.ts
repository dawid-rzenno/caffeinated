import { Routes } from "@angular/router";
import { DietDetailsComponent } from "./components/diet-details/diet-details.component";
import { dietResolver } from "./components/diet-details/diet.resolver";
import { shoppingListResolver } from "./components/shopping-list-details/shopping-list.resolver";
import { ShoppingListDetailsComponent } from "./components/shopping-list-details/shopping-list-details.component";
import { MealDetailsComponent } from "./components/meal-details/meal-details.component";
import { mealResolver } from "./components/meal-details/meal.resolver";
import { IngredientDetailsComponent } from "./components/ingredient-details/ingredient-details.component";
import { IngredientsComponent } from "./components/ingredients/ingredients.component";
import { ingredientResolver } from "./components/ingredient-details/ingredient.resolver";
import { IngredientFormComponent } from "./components/ingredient-form/ingredient-form.component";
import { MealsComponent } from "./components/meals/meals.component";
import { DietFormComponent } from "./components/diet-form/diet-form.component";
import { DietsComponent } from "./components/diets/diets.component";
import { ShoppingListsComponent } from "./components/shopping-lists/shopping-lists.component";
import { ShoppingListFormComponent } from "./components/shopping-list-form/shopping-list-form.component";

export function createTitle(pathTitle: string): string {
  return `${pathTitle} | Caffeinated Fitness`;
}

export const routes: Routes = [
  {
    path: 'ingredient/:id',
    component: IngredientDetailsComponent,
    resolve: {
      details: ingredientResolver
    },
    title: createTitle('Ingredient Details'),
  },
  {
    path: 'ingredients',
    component: IngredientsComponent,
    resolve: {
      items: ingredientResolver
    },
    title: createTitle('Ingredients'),
  },
  {
    path: 'ingredient',
    component: IngredientFormComponent,
    title: createTitle('New Ingredient'),
  },
  ////////////////////////////////////////////////////////////////
  {
    path: 'meal/:id',
    component: MealDetailsComponent,
    resolve: {
      details: mealResolver
    },
    title: createTitle('Meal Details'),
  },
  {
    path: 'meals',
    component: MealsComponent,
    resolve: {
      items: mealResolver
    },
    title: createTitle('Meals'),
  },
  {
    path: 'meal',
    component: IngredientFormComponent,
    title: createTitle('New Meal'),
  },
  ////////////////////////////////////////////////////////////////
  {
    path: 'diet/:id',
    component: DietDetailsComponent,
    resolve: {
      details: dietResolver
    },
    title: createTitle('Diet Details'),
  },
  {
    path: 'diets',
    component: DietsComponent,
    resolve: {
      items: dietResolver
    },
    title: createTitle('Diets'),
  },
  {
    path: 'diet',
    component: DietFormComponent,
    title: createTitle('New Diet'),
  },
  ////////////////////////////////////////////////////////////////
  {
    path: 'shopping-list/:id',
    component: ShoppingListDetailsComponent,
    resolve: {
      details: shoppingListResolver
    },
    title: createTitle('Shopping List Details'),
  },
  {
    path: 'shopping-lists',
    component: ShoppingListsComponent,
    resolve: {
      items: shoppingListResolver
    },
    title: createTitle('Shopping Lists'),
  },
  {
    path: 'shopping-list',
    component: ShoppingListFormComponent,
    title: createTitle('New Shopping List'),
  },
]
