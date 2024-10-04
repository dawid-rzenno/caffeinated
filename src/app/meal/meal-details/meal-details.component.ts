import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from "@angular/router";
import { MealDetails } from "../meal";
import { DetailsComponentAbstract } from "../../details-component.abstract";
import { MatCardModule } from "@angular/material/card";

@Component({
  selector: 'cortado-meal-details',
  standalone: true,
  imports: [
    MatCardModule,
    RouterLink,
  ],
  templateUrl: './meal-details.component.html',
  styleUrl: './meal-details.component.scss'
})
export class MealDetailsComponent extends DetailsComponentAbstract<MealDetails> {

  constructor(route: ActivatedRoute) {
    super(route);
  }
}
