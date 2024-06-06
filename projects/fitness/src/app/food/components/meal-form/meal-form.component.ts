import { Component } from '@angular/core';
import { FormComponentAbstract } from "../../abstracts/form-component.abstract";

@Component({
  selector: 'app-meal-form',
  standalone: true,
  imports: [],
  templateUrl: './meal-form.component.html',
  styleUrl: './meal-form.component.scss'
})
export class MealFormComponent extends FormComponentAbstract {

}
