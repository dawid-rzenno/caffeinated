import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from "@angular/router";
import { DietDetails } from "./diet";
import { NgForOf } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { MatCheckbox } from "@angular/material/checkbox";
import { MatButton } from "@angular/material/button";

@Component({
  selector: 'app-diet',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink,
    ReactiveFormsModule,
    MatCheckbox,
    MatButton
  ],
  templateUrl: './diet.component.html',
  styleUrl: './diet.component.scss'
})
export class DietComponent {
  diet: DietDetails = this.route.snapshot.data['diet'];

  constructor(private route: ActivatedRoute) {}
}
