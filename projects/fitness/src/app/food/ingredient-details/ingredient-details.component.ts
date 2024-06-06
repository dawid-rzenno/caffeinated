import { Component } from '@angular/core';
import { DetailsComponentAbstract } from "../details-component.abstract";

@Component({
  selector: 'app-ingredient-details',
  standalone: true,
  imports: [],
  templateUrl: './ingredient-details.component.html',
  styleUrl: './ingredient-details.component.scss'
})
export class IngredientDetailsComponent extends DetailsComponentAbstract {

}
