import { Component } from '@angular/core';
import { ItemsComponentAbstract } from "../../abstracts/items-component.abstract";
import { Diet } from "../diet-details/diet";
import { ActivatedRoute, RouterModule } from "@angular/router";
import { DietService } from "../../services/diet.service";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: 'app-diets',
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatCardModule,
    RouterModule
  ],
  templateUrl: './diets.component.html',
  styleUrl: './diets.component.scss'
})
export class DietsComponent extends ItemsComponentAbstract<Diet> {
  constructor(route: ActivatedRoute, service: DietService, dialog: MatDialog) {
    super(route, service, dialog);
  }
}
