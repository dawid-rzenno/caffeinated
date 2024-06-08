import { Component, Input } from '@angular/core';
import { Ingredient } from "../ingredient";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-ingredient-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, RouterModule],
  templateUrl: './ingredient-card.component.html',
  styleUrl: './ingredient-card.component.scss'
})
export class IngredientCardComponent {
  @Input() ingredient!: Ingredient;

  onDeleteClick(): void {

  }
}
