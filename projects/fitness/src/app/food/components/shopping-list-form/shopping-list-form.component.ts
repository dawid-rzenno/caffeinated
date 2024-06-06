import { Component } from '@angular/core';
import { FormComponentAbstract } from "../../abstracts/form-component.abstract";

@Component({
  selector: 'app-shopping-list-form',
  standalone: true,
  imports: [],
  templateUrl: './shopping-list-form.component.html',
  styleUrl: './shopping-list-form.component.scss'
})
export class ShoppingListFormComponent extends FormComponentAbstract {

}
