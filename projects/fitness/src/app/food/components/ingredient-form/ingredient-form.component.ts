import { Component } from '@angular/core';
import { FormComponentAbstract } from "../../abstracts/form-component.abstract";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { NgForOf } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { ActivatedRoute } from "@angular/router";
import { IngredientService } from "../../services/ingredient.service";
import { IngredientDetails } from "../ingredient-details/ingredient";

export type IngredientForm = {
  id: FormControl<string>,
  category: FormControl<string>,
  price: FormControl<number>,
  quantity: FormControl<number>,
  amount: FormControl<number>
}

export type IngredientDetailsForm = IngredientForm & {
  calories: FormControl<number>,
  proteins: FormControl<number>,
  carbohydrates: FormControl<number>,
  fats: FormControl<number>
}


@Component({
  selector: 'app-ingredient-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    NgForOf,
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './ingredient-form.component.html',
  styleUrl: './ingredient-form.component.scss'
})
export class IngredientFormComponent extends FormComponentAbstract<IngredientDetails> {
  readonly formGroup: FormGroup<IngredientDetailsForm> = new FormGroup<IngredientDetailsForm>({
    id: new FormControl<string>('', {nonNullable: true}),
    category: new FormControl<string>('', {nonNullable: true}),
    price: new FormControl<number>(0, {nonNullable: true}),
    quantity: new FormControl<number>(0, {nonNullable: true}),
    amount: new FormControl<number>(0, {nonNullable: true}),
    calories: new FormControl<number>(0, {nonNullable: true}),
    proteins: new FormControl<number>(0, {nonNullable: true}),
    carbohydrates: new FormControl<number>(0, {nonNullable: true}),
    fats: new FormControl<number>(0, {nonNullable: true})
  });

  readonly defaultFormGroupValue: IngredientDetails = {
    amount: 0,
    calories: 0,
    carbohydrates: 0,
    category: "",
    fats: 0,
    id: "",
    name: "",
    price: 0,
    proteins: 0,
    quantity: 0
  };

  readonly categoryOptions: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  constructor(route: ActivatedRoute, service: IngredientService) {
    super(route, service);
  }


}
