import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { foodRoutes } from "./food.routes";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(foodRoutes)
  ]
})
export class FoodModule { }
