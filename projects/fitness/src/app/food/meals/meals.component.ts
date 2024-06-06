import { Component } from '@angular/core';
import { ElementsComponentAbstract } from "../elements-component.abstract";

@Component({
  selector: 'app-meals',
  standalone: true,
  imports: [],
  templateUrl: './meals.component.html',
  styleUrl: './meals.component.scss'
})
export class MealsComponent extends ElementsComponentAbstract {

}
