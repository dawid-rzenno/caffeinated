import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { exerciseRoutes } from "./exercise.routes";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(exerciseRoutes)
  ]
})
export class ExerciseModule { }
