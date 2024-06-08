import { Component } from '@angular/core';
import { ItemsComponentAbstract } from "../../items-component.abstract";
import { Meal } from "../meal";
import { ActivatedRoute, RouterModule } from "@angular/router";
import { MealService } from "../meal.service";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: 'app-meals',
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatCardModule,
    RouterModule
  ],
  templateUrl: './meals.component.html',
  styleUrl: './meals.component.scss'
})
export class MealsComponent extends ItemsComponentAbstract<Meal> {
  constructor(route: ActivatedRoute, service: MealService, dialog: MatDialog) {
    super(route, service, dialog);
  }
}
