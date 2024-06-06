import { Component } from '@angular/core';
import { ElementsComponentAbstract } from "../elements-component.abstract";

@Component({
  selector: 'app-ingredients',
  standalone: true,
  imports: [],
  templateUrl: './ingredients.component.html',
  styleUrl: './ingredients.component.scss'
})
export class IngredientsComponent extends ElementsComponentAbstract {

}
