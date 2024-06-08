import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { NgForOf } from "@angular/common";
import { ShoppingListDetails } from "../shopping-list";
import { DetailsComponentAbstract } from "../../details-component.abstract";

@Component({
  selector: 'app-shopping-list-details',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './shopping-list-details.component.html',
  styleUrl: './shopping-list-details.component.scss'
})
export class ShoppingListDetailsComponent extends DetailsComponentAbstract<ShoppingListDetails> {

  constructor(route: ActivatedRoute) {
    super(route);
  }
}
