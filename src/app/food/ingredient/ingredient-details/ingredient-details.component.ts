import { Component } from '@angular/core';
import { DetailsComponentAbstract } from "../../details-component.abstract";
import { IngredientDetails } from "../ingredient";
import { ActivatedRoute } from "@angular/router";
import { MatCardModule } from "@angular/material/card";

@Component({
  selector: 'cortado-ingredient-details',
  standalone: true,
  imports: [
    MatCardModule
  ],
  templateUrl: './ingredient-details.component.html',
  styleUrl: './ingredient-details.component.scss'
})
export class IngredientDetailsComponent extends DetailsComponentAbstract<IngredientDetails> {

  constructor(route: ActivatedRoute) {
    super(route);
  }
}
