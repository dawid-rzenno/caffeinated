import { Component } from '@angular/core';
import { ItemsComponentAbstract } from "../../abstracts/items-component.abstract";
import { ActivatedRoute } from "@angular/router";
import { ShoppingList } from "../shopping-list-details/shopping-list";
import { ShoppingListService } from "../../services/shopping-list.service";

@Component({
  selector: 'app-shopping-lists',
  standalone: true,
  imports: [],
  templateUrl: './shopping-lists.component.html',
  styleUrl: './shopping-lists.component.scss'
})
export class ShoppingListsComponent extends ItemsComponentAbstract<ShoppingList> {
  constructor(route: ActivatedRoute, service: ShoppingListService) {
    super(route, service);
  }
}
