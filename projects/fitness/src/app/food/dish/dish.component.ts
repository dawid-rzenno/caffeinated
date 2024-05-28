import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Dish } from "../dish";
import { JsonPipe, NgForOf } from "@angular/common";
import { Ingredient, Nutrition } from "../ingredient";

@Component({
  selector: 'app-dish',
  standalone: true,
  imports: [
    JsonPipe,
    NgForOf
  ],
  templateUrl: './dish.component.html',
  styleUrl: './dish.component.scss'
})
export class DishComponent implements OnInit {
  dish?: Dish;
  calories?: number;
  proteins?: number;
  carbohydrates?: number;
  fats?: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.dish = data['dish'];

      if (this.dish) {
        this.calculateDishNutrition(this.dish)
      }
    })
  }

  calculateDishNutrition(dish: Dish) {
    this.calories = this.sumIngredientsNutritionInCategory(dish.ingredients, 'calories')
    this.proteins = this.sumIngredientsNutritionInCategory(dish.ingredients, 'proteins')
    this.carbohydrates = this.sumIngredientsNutritionInCategory(dish.ingredients, 'carbohydrates')
    this.fats = this.sumIngredientsNutritionInCategory(dish.ingredients, 'fats')
  }

  sumIngredientsNutritionInCategory(ingredients: Ingredient[], category: keyof Nutrition): number {
    return Math.round(
      ingredients.reduce((sum: number, ingredient: Ingredient) => sum + ingredient[category], 0) * 1000
    ) / 1000
  }
}
