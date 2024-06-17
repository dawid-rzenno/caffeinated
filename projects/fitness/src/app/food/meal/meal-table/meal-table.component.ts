import { Component, Input } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";
import { Meal } from "../meal";
import { TableComponentAbstract } from "../../table-component-abstract.directive";
import { MatCardModule } from "@angular/material/card";
import { MatPaginatorModule } from "@angular/material/paginator";
import { RouterModule } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import { MealService } from "../meal.service";

@Component({
  selector: 'app-meal-table',
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    RouterModule,
    MatCardModule
  ],
  templateUrl: './meal-table.component.html',
  styleUrl: './meal-table.component.scss'
})
export class MealTableComponent extends TableComponentAbstract<Meal> {
  @Input({ transform: (value: Meal[] | null) => value ?? []}) dataSource: Meal[] = [];


  constructor(service: MealService, dialog: MatDialog) {
    super(service, dialog);
  }
}
