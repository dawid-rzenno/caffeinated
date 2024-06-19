import { Component } from '@angular/core';
import { RoutedTableComponentAbstract } from "../../table-component-abstract.directive";
import { ActivatedRoute } from "@angular/router";
import { ShoppingList } from "../shopping-list";
import { ShoppingListTableComponent } from "../shopping-list-table/shopping-list-table.component";

@Component({
  selector: 'app-shopping-lists',
  standalone: true,
  imports: [
    ShoppingListTableComponent
  ],
  templateUrl: './shopping-lists.component.html',
  styleUrl: './shopping-lists.component.scss'
})
export class ShoppingListsComponent extends RoutedTableComponentAbstract<ShoppingList> {
  constructor(route: ActivatedRoute) {
    super(route);
  }
}
