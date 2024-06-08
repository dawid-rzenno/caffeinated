import { Component } from '@angular/core';
import { ItemsComponentAbstract } from "../../items-component.abstract";
import { ActivatedRoute, RouterModule } from "@angular/router";
import { ShoppingList } from "../shopping-list";
import { ShoppingListService } from "../shopping-list.service";
import { MatDialog } from "@angular/material/dialog";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";

@Component({
  selector: 'app-shopping-lists',
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatCardModule,
    RouterModule
  ],
  templateUrl: './shopping-lists.component.html',
  styleUrl: './shopping-lists.component.scss'
})
export class ShoppingListsComponent extends ItemsComponentAbstract<ShoppingList> {
  constructor(route: ActivatedRoute, service: ShoppingListService, dialog: MatDialog) {
    super(route, service, dialog);
  }
}
