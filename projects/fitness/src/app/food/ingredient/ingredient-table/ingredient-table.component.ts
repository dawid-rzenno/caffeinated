import { Component, Input } from '@angular/core';
import { TableComponentAbstract } from "../../table-component-abstract.directive";
import { MatDialog } from "@angular/material/dialog";
import { IngredientService } from "../ingredient.service";
import { Ingredient } from "../ingredient";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-ingredient-table',
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    RouterModule,
    MatCardModule
  ],
  templateUrl: './ingredient-table.component.html',
  styleUrl: './ingredient-table.component.scss'
})
export class IngredientTableComponent extends TableComponentAbstract<Ingredient> {
  @Input() dataSource: Ingredient[] = [];

  override displayedColumns: string[] = ['id', 'name', 'category', 'price', 'actions']

  constructor(service: IngredientService, dialog: MatDialog) {
    super(service, dialog);
  }
}
