import { Component } from '@angular/core';
import { ItemsComponentAbstract } from "../../abstracts/items-component.abstract";
import { Ingredient } from "../ingredient-details/ingredient";
import { ActivatedRoute, RouterModule } from "@angular/router";
import { IngredientService } from "../../services/ingredient.service";
import { MatDialog } from "@angular/material/dialog";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";

@Component({
  selector: 'app-ingredients',
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatCardModule,
    RouterModule
  ],
  templateUrl: './ingredients.component.html',
  styleUrl: './ingredients.component.scss'
})
export class IngredientsComponent extends ItemsComponentAbstract<Ingredient> {
  override displayedColumns: string[] = ['id', 'name', 'category', 'price', 'actions']

  constructor(route: ActivatedRoute, service: IngredientService, dialog: MatDialog) {
    super(route, service, dialog);
  }
}
