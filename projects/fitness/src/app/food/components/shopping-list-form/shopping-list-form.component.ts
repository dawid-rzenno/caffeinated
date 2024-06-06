import { Component } from '@angular/core';
import { FormComponentAbstract } from "../../abstracts/form-component.abstract";
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { ShoppingListDetails } from "../shopping-list-details/shopping-list";
import { ActivatedRoute } from "@angular/router";
import { IngredientDetailsForm } from "../ingredient-form/ingredient-form.component";
import { ShoppingListService } from "../../services/shopping-list.service";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { NgForOf } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";

export type ShoppingListForm = {
  id: FormControl<string>,
  name: FormControl<string>,
  description: FormControl<string>,
}

export type ShoppingListDetailsForm = ShoppingListForm & {
  ingredients: FormArray<FormGroup<IngredientDetailsForm>>
}

@Component({
  selector: 'app-shopping-list-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    NgForOf,
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './shopping-list-form.component.html',
  styleUrl: './shopping-list-form.component.scss'
})
export class ShoppingListFormComponent extends FormComponentAbstract<ShoppingListDetails> {
  readonly formGroup: FormGroup<ShoppingListDetailsForm> = new FormGroup<ShoppingListDetailsForm>({
    id: new FormControl<string>('', {nonNullable: true}),
    name: new FormControl<string>('', {nonNullable: true}),
    description: new FormControl<string>('', {nonNullable: true}),
    ingredients: new FormArray<FormGroup<IngredientDetailsForm>>([]),
  })

  readonly defaultFormGroupValue: ShoppingListDetails = {
    id: "",
    name: "",
    description: "",
    ingredients: []
  };

  constructor(route: ActivatedRoute, service: ShoppingListService) {
    super(route, service);
  }
}
