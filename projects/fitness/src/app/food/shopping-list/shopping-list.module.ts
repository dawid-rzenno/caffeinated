import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { shoppingListRoutes } from "./shopping-list.routes";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(shoppingListRoutes)
  ]
})
export class ShoppingListModule { }
