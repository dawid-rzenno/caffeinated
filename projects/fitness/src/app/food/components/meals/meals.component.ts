import { Component } from '@angular/core';
import { ItemsComponentAbstract } from "../../abstracts/items-component.abstract";
import { Meal } from "../meal-details/meal";
import { ActivatedRoute } from "@angular/router";
import { MealService } from "../../services/meal.service";

@Component({
  selector: 'app-meals',
  standalone: true,
  imports: [],
  templateUrl: './meals.component.html',
  styleUrl: './meals.component.scss'
})
export class MealsComponent extends ItemsComponentAbstract<Meal> {
  constructor(route: ActivatedRoute, service: MealService) {
    super(route, service);
  }
}
