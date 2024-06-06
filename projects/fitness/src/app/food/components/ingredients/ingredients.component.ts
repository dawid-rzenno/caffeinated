import { Component } from '@angular/core';
import { ItemsComponentAbstract } from "../../abstracts/items-component.abstract";
import { Ingredient } from "../ingredient-details/ingredient";
import { ActivatedRoute } from "@angular/router";
import { IngredientService } from "../../services/ingredient.service";

@Component({
  selector: 'app-ingredients',
  standalone: true,
  imports: [],
  templateUrl: './ingredients.component.html',
  styleUrl: './ingredients.component.scss'
})
export class IngredientsComponent extends ItemsComponentAbstract<Ingredient> {
  constructor(route: ActivatedRoute, service: IngredientService) {
    super(route, service);
  }
}
