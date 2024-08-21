import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from "@angular/router";
import { MealDetails } from "../meal";
import { DetailsComponentAbstract } from "../../details-component.abstract";
import { MatCardModule } from "@angular/material/card";
import { IngredientTableComponent } from "../../ingredient/ingredient-table/ingredient-table.component";

@Component({
  selector: 'app-meal-details',
  standalone: true,
  imports: [
    MatCardModule,
    RouterLink,
    IngredientTableComponent
  ],
  templateUrl: './meal-details.component.html',
  styleUrl: './meal-details.component.scss'
})
export class MealDetailsComponent extends DetailsComponentAbstract<MealDetails> {

  constructor(route: ActivatedRoute) {
    super(route);
  }
}
