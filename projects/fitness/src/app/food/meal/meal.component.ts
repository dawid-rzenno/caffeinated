import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { MealDetails } from "./meal";
import { JsonPipe, NgForOf } from "@angular/common";
import { IngredientDetails, Nutrients } from "./ingredient";
import { NutritionPer100gPipe } from "./nutrition-per100g.pipe";

@Component({
  selector: 'app-meal',
  standalone: true,
  imports: [
    JsonPipe,
    NgForOf,
    NutritionPer100gPipe
  ],
  templateUrl: './meal.component.html',
  styleUrl: './meal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MealComponent {
  meal: MealDetails = this.route.snapshot.data['meal'];

  calories: number = this.calculateNutrientAmounts('calories');
  proteins: number = this.calculateNutrientAmounts('proteins');
  carbohydrates: number = this.calculateNutrientAmounts('carbohydrates');
  fats: number = this.calculateNutrientAmounts('fats');
  price: number = this.calculateNutrientAmounts('price');

  constructor(private route: ActivatedRoute) {}

  calculateNutrientAmounts(category: keyof Nutrients | 'price'): number {
    return Math.round(
      this.meal.ingredients.reduce((sum: number, ingredient: IngredientDetails) => sum + this.nutrientPer100g(ingredient[category], ingredient.amount), 0) * 1000
    ) / 1000
  }

  nutrientPer100g(value: number, amount: number): number {
    return value * (amount / 100);
  }
}
