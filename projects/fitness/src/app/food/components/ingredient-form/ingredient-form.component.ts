import { Component } from '@angular/core';
import { FormComponentAbstract } from "../../abstracts/form-component.abstract";

@Component({
  selector: 'app-ingredient-form',
  standalone: true,
  imports: [],
  templateUrl: './ingredient-form.component.html',
  styleUrl: './ingredient-form.component.scss'
})
export class IngredientFormComponent extends FormComponentAbstract {

}
