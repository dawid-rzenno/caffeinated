import { Component, Input } from '@angular/core';
import { ShoppingList } from "../shopping-list";
import { TableComponentAbstract } from "../../table-component-abstract.directive";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { RouterModule } from "@angular/router";
import { ShoppingListService } from "../shopping-list.service";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: 'app-shopping-list-table',
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatCardModule,
    RouterModule,
  ],
  templateUrl: './shopping-list-table.component.html',
  styleUrl: './shopping-list-table.component.scss'
})
export class ShoppingListTableComponent extends TableComponentAbstract<ShoppingList> {
  @Input() dataSource: ShoppingList[] = [];

  constructor(service: ShoppingListService, dialog: MatDialog) {
    super(service, dialog);
  }
}
