import { Component } from '@angular/core';
import { FormComponentAbstract } from "../../form-component.abstract";
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { ShoppingListDetails } from "../shopping-list";
import { ActivatedRoute } from "@angular/router";
import { ShoppingListService } from "../shopping-list.service";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { AsyncPipe, NgForOf } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { createIngredientForm, IngredientForm } from "../../ingredient/ingredient-form/ingredient-form.component";
import {
  MatAutocomplete,
  MatAutocompleteSelectedEvent,
  MatAutocompleteTrigger,
  MatOption
} from "@angular/material/autocomplete";
import { Observable } from "rxjs";
import { Ingredient } from "../../ingredient/ingredient";
import { IngredientService } from "../../ingredient/ingredient.service";

export type ShoppingListForm = {
  id: FormControl<string>,
  name: FormControl<string>,
  description: FormControl<string>,
}

export type ShoppingListDetailsForm = ShoppingListForm & {
  ingredients: FormArray<FormGroup<IngredientForm>>
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
    MatButtonModule,
    AsyncPipe,
    MatAutocomplete,
    MatAutocompleteTrigger,
    MatOption
  ],
  templateUrl: './shopping-list-form.component.html',
  styleUrl: './shopping-list-form.component.scss'
})
export class ShoppingListFormComponent extends FormComponentAbstract<ShoppingListDetails> {
  readonly ingredientsFormArray: FormArray<FormGroup<IngredientForm>> = new FormArray<FormGroup<IngredientForm>>([])

  readonly formGroup: FormGroup<ShoppingListDetailsForm> = new FormGroup<ShoppingListDetailsForm>({
    id: new FormControl<string>('', {nonNullable: true}),
    name: new FormControl<string>('', {nonNullable: true}),
    description: new FormControl<string>('', {nonNullable: true}),
    ingredients: this.ingredientsFormArray,
  })

  readonly defaultFormGroupValue: ShoppingListDetails = {
    id: "",
    name: "",
    description: "",
    ingredients: []
  };

  readonly ingredientSearchFormControl: FormControl<string> = new FormControl<string>('', {nonNullable: true})
  readonly ingredientAutocompleteOptions$: Observable<Ingredient[]> = this.createAutocompleteOptions$(
    this.ingredientSearchFormControl,
    this.ingredientService
  );

  constructor(route: ActivatedRoute, service: ShoppingListService, private ingredientService: IngredientService) {
    super(route, service);

    if (this.details) {
      for (let ingredient of this.details.ingredients) {
        this.ingredientsFormArray.push(createIngredientForm(ingredient))
      }
    }
  }

  onOptionSelected(event: MatAutocompleteSelectedEvent): void {
    this.formGroup.controls.ingredients.push(createIngredientForm(event.option.value))
  }
}
