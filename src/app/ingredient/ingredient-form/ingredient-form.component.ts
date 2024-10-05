import { Component } from '@angular/core';
import { FormComponentAbstract } from "../../shared/abstracts/form-component.abstract";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { NgForOf } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { ActivatedRoute } from "@angular/router";
import { IngredientService } from "../ingredient.service";
import { Ingredient, IngredientDetails } from "../ingredient";

export type IngredientForm = {
  id: FormControl<number | undefined>,
  name: FormControl<string>,
  category_id: FormControl<number>,
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

export const createIngredientForm = (ingredient: Ingredient) => new FormGroup<IngredientForm>({
  id: new FormControl<number | undefined>(ingredient.id, {nonNullable: true}),
  name: new FormControl<string>(ingredient.name, {nonNullable: true}),
  category_id: new FormControl<number>(ingredient.category_id, {nonNullable: true}),
  price: new FormControl<number>(ingredient.price, {nonNullable: true}),
  quantity: new FormControl<number>(ingredient.quantity ?? 0, {nonNullable: true}),
  amount: new FormControl<number>(ingredient.amount, {nonNullable: true})
});


@Component({
  selector: 'cortado-ingredient-form',
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
    id: new FormControl<number | undefined>(undefined, {nonNullable: true}),
    category_id: new FormControl<number>(0, {nonNullable: true}),
    name: new FormControl<string>('', {nonNullable: true}),
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
    category_id: 0,
    fats: 0,
    id: undefined,
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
