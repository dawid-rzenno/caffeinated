import { Component } from '@angular/core';
import { ElementsComponentAbstract } from "../elements-component.abstract";

@Component({
  selector: 'app-shopping-lists',
  standalone: true,
  imports: [],
  templateUrl: './shopping-lists.component.html',
  styleUrl: './shopping-lists.component.scss'
})
export class ShoppingListsComponent extends ElementsComponentAbstract {

}
