import { Component, OnInit } from '@angular/core';
import { FormComponentAbstract } from "../../form-component.abstract";
import { DietDetails } from "../diet";
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { DietService } from "../diet.service";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { AsyncPipe, NgForOf } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { createMealForm, MealForm } from "../../meal/meal-form/meal-form.component";
import { Observable } from "rxjs";
import { Meal } from "../../meal/meal";
import { MealService } from "../../meal/meal.service";
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from "@angular/material/autocomplete";

export type DietForm = {
  id: FormControl<string>,
  name: FormControl<string>,
  description: FormControl<string>,
}

export type DietDetailsForm = DietForm & {
  meals: FormArray<FormGroup<MealForm>>
}

@Component({
  selector: 'app-diet-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    NgForOf,
    MatCardModule,
    MatButtonModule,
    MatAutocompleteModule,
    AsyncPipe
  ],
  templateUrl: './diet-form.component.html',
  styleUrl: './diet-form.component.scss'
})
export class DietFormComponent extends FormComponentAbstract<DietDetails> implements OnInit {
  readonly mealsFormArray: FormArray<FormGroup<MealForm>> = new FormArray<FormGroup<MealForm>>([]);

  readonly formGroup: FormGroup<DietDetailsForm> = new FormGroup<DietDetailsForm>({
    id: new FormControl<string>("", {nonNullable: true}),
    name: new FormControl<string>("", {nonNullable: true}),
    description: new FormControl<string>("", {nonNullable: true}),
    meals: this.mealsFormArray
  });

  readonly defaultFormGroupValue: DietDetails = {
    id: "",
    name: "",
    description: "",
    meals: []
  };

  readonly mealSearchFormControl: FormControl<string> = new FormControl<string>('', {nonNullable: true})
  readonly mealAutocompleteOptions$: Observable<Meal[]> = this.createAutocompleteOptions$(
    this.mealSearchFormControl,
    this.mealService
  )

  constructor(route: ActivatedRoute, service: DietService, private mealService: MealService) {
    super(route, service);
  }

  override ngOnInit() {
    super.ngOnInit();
    if (this.details) {
      for (let meal of this.details.meals) {
        this.mealsFormArray.push(createMealForm(meal))
      }
    }
  }

  onOptionSelected(event: MatAutocompleteSelectedEvent): void {
    this.formGroup.controls.meals.push(createMealForm(event.option.value))
  }
}
