import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { MealDetails } from "../meal";
import { JsonPipe, NgForOf } from "@angular/common";
import { NutritionPer100gPipe } from "./nutrition-per100g.pipe";
import { DetailsComponentAbstract } from "../../details-component.abstract";
import { IngredientDetails, Nutrients } from "../../ingredient/ingredient";

@Component({
  selector: 'app-meal-details',
  standalone: true,
  imports: [
    JsonPipe,
    NgForOf,
    NutritionPer100gPipe
  ],
  templateUrl: './meal-details.component.html',
  styleUrl: './meal-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MealDetailsComponent extends DetailsComponentAbstract<MealDetails> {
  calories: number = this.calculateNutrientAmounts('calories');
  proteins: number = this.calculateNutrientAmounts('proteins');
  carbohydrates: number = this.calculateNutrientAmounts('carbohydrates');
  fats: number = this.calculateNutrientAmounts('fats');
  price: number = this.calculateNutrientAmounts('price');

  constructor(route: ActivatedRoute) {
    super(route);
  }

  calculateNutrientAmounts(category: keyof Nutrients | 'price'): number {
    return Math.round(
      this.details.ingredients.reduce((sum: number, ingredient: IngredientDetails) => sum + this.nutrientPer100g(ingredient[category], ingredient.amount), 0) * 1000
    ) / 1000
  }

  nutrientPer100g(value: number, amount: number): number {
    return value * (amount / 100);
  }
}
