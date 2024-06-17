import { Component } from '@angular/core';
import { RoutedTableComponentAbstract } from "../../table-component-abstract.directive";
import { Ingredient } from "../ingredient";
import { ActivatedRoute } from "@angular/router";
import { IngredientService } from "../ingredient.service";
import { MatDialog } from "@angular/material/dialog";
import { IngredientTableComponent } from "../ingredient-table/ingredient-table.component";

@Component({
  selector: 'app-ingredients',
  standalone: true,
  imports: [
    IngredientTableComponent
  ],
  templateUrl: './ingredients.component.html',
  styleUrl: './ingredients.component.scss'
})
export class IngredientsComponent extends RoutedTableComponentAbstract<Ingredient> {
  constructor(route: ActivatedRoute, service: IngredientService, dialog: MatDialog) {
    super(route, service, dialog);
  }
}
