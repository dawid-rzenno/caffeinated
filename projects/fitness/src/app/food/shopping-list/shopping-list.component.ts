import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { NgForOf } from "@angular/common";
import { ShoppingListDetails } from "./shopping-list";

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.scss'
})
export class ShoppingListComponent {
  shoppingList: ShoppingListDetails = this.route.snapshot.data['shoppingList'];

  constructor(private route: ActivatedRoute) {}
}
