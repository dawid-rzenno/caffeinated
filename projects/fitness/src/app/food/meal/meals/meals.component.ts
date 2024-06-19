import { Component } from '@angular/core';
import { RoutedTableComponentAbstract } from "../../table-component-abstract.directive";
import { Meal } from "../meal";
import { ActivatedRoute } from "@angular/router";
import { MealTableComponent } from "../meal-table/meal-table.component";

@Component({
  selector: 'app-meals',
  standalone: true,
  imports: [
    MealTableComponent,
  ],
  templateUrl: './meals.component.html',
  styleUrl: './meals.component.scss'
})
export class MealsComponent extends RoutedTableComponentAbstract<Meal> {
  constructor(route: ActivatedRoute) {
    super(route);
  }
}
