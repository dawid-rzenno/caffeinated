import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from "@angular/router";
import { NgForOf } from "@angular/common";
import { ShoppingListDetails } from "../shopping-list";
import { DetailsComponentAbstract } from "../../details-component.abstract";
import { MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle } from "@angular/material/card";
import { IngredientTableComponent } from "../../ingredient/ingredient-table/ingredient-table.component";

@Component({
  selector: 'app-shopping-list-details',
  standalone: true,
  imports: [
    NgForOf,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle,
    RouterModule,
    IngredientTableComponent
  ],
  templateUrl: './shopping-list-details.component.html',
  styleUrl: './shopping-list-details.component.scss'
})
export class ShoppingListDetailsComponent extends DetailsComponentAbstract<ShoppingListDetails> {

  constructor(route: ActivatedRoute) {
    super(route);
  }
}
