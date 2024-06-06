import { Component } from '@angular/core';
import { ElementsComponentAbstract } from "../elements-component.abstract";

@Component({
  selector: 'app-diets',
  standalone: true,
  imports: [],
  templateUrl: './diets.component.html',
  styleUrl: './diets.component.scss'
})
export class DietsComponent extends ElementsComponentAbstract {

}
