import { Component } from '@angular/core';
import { TableComponentAbstract } from "../../table-component-abstract.directive";
import { MatDialog } from "@angular/material/dialog";
import { IngredientService } from "../ingredient.service";
import { Ingredient } from "../ingredient";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import { NgIf } from "@angular/common";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-ingredient-table',
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    RouterModule,
    MatCardModule,
    NgIf,
    FaIconComponent
  ],
  templateUrl: './ingredient-table.component.html',
  styleUrl: './ingredient-table.component.scss'
})
export class IngredientTableComponent extends TableComponentAbstract<Ingredient> {
  override displayedColumns: string[] = ['id', 'name', 'category', 'price', 'actions']

  constructor(service: IngredientService, route: ActivatedRoute, router: Router, dialog: MatDialog) {
    super(service, route, router, dialog);
  }
}
