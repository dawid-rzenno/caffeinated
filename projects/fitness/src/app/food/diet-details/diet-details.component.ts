import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from "@angular/router";
import { DietDetails } from "./diet";
import { NgForOf } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { MatCheckbox } from "@angular/material/checkbox";
import { MatButton } from "@angular/material/button";
import { DetailsComponentAbstract } from "../details-component.abstract";

@Component({
  selector: 'app-diet-details',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink,
    ReactiveFormsModule,
    MatCheckbox,
    MatButton
  ],
  templateUrl: './diet-details.component.html',
  styleUrl: './diet-details.component.scss'
})
export class DietDetailsComponent extends DetailsComponentAbstract<DietDetails> {

  constructor(route: ActivatedRoute) {
    super(route);
  }
}
