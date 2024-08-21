import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { mealRoutes } from "./meal.routes";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(mealRoutes)
  ]
})
export class MealModule { }
