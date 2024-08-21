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
import { map, Observable, startWith } from "rxjs";
import { Ingredient } from "../../ingredient/ingredient";
import { IngredientService } from "../../ingredient/ingredient.service";
import { MealTableComponent } from "../../meal/meal-table/meal-table.component";
import { IngredientTableComponent } from "../../ingredient/ingredient-table/ingredient-table.component";

export type ShoppingListForm = {
  id: FormControl<number | undefined>,
  name: FormControl<string>,
  description: FormControl<string>,
}

export type ShoppingListDetailsForm = ShoppingListForm & {
  ingredients: FormArray<FormGroup<IngredientForm>>
}

@Component({
  selector: 'cortado-shopping-list-form',
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
    MatOption,
    MealTableComponent,
    IngredientTableComponent
  ],
  templateUrl: './shopping-list-form.component.html',
  styleUrl: './shopping-list-form.component.scss'
})
export class ShoppingListFormComponent extends FormComponentAbstract<ShoppingListDetails> {
  readonly ingredientsFormArray: FormArray<FormGroup<IngredientForm>> = new FormArray<FormGroup<IngredientForm>>([])
  readonly ingredientTableDataSource$: Observable<Ingredient[]> =
    this.ingredientsFormArray.valueChanges.pipe(
      startWith(() => this.ingredientsFormArray.getRawValue()),
      map(() => this.ingredientsFormArray.getRawValue())
    ) as Observable<Ingredient[]>;

  readonly formGroup: FormGroup<ShoppingListDetailsForm> = new FormGroup<ShoppingListDetailsForm>({
    id: new FormControl<number | undefined>(undefined, {nonNullable: true}),
    name: new FormControl<string>('', {nonNullable: true}),
    description: new FormControl<string>('', {nonNullable: true}),
    ingredients: this.ingredientsFormArray,
  })

  readonly defaultFormGroupValue: ShoppingListDetails = {
    id: undefined,
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
