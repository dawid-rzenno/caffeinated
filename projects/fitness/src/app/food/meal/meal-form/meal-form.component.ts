import { Component } from '@angular/core';
import { FormComponentAbstract } from "../../form-component.abstract";
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { MealDetails } from "../meal";
import { ActivatedRoute } from "@angular/router";
import { MealService } from "../meal.service";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { NgForOf } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { IngredientDetailsForm } from "../../ingredient/ingredient-form/ingredient-form.component";

export type MealForm = {
  id: FormControl<string>,
  name: FormControl<string>,
  description: FormControl<string>,
}

export type MealDetailsForm = MealForm & {
  ingredients: FormArray<FormGroup<IngredientDetailsForm>>
}

@Component({
  selector: 'app-meal-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    NgForOf,
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './meal-form.component.html',
  styleUrl: './meal-form.component.scss'
})
export class MealFormComponent extends FormComponentAbstract<MealDetails> {
  readonly formGroup: FormGroup<MealDetailsForm> = new FormGroup<MealDetailsForm>({
    id: new FormControl<string>('', {nonNullable: true}),
    name: new FormControl<string>('', {nonNullable: true}),
    description: new FormControl<string>('', {nonNullable: true}),
    ingredients: new FormArray<FormGroup<IngredientDetailsForm>>([]),
  })

  readonly defaultFormGroupValue: MealDetails = {
    id: "",
    name: "",
    description: "",
    ingredients: []
  };

  constructor(route: ActivatedRoute, service: MealService) {
    super(route, service);
  }
}
