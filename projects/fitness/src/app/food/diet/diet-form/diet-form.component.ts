import { Component } from '@angular/core';
import { FormComponentAbstract } from "../../form-component.abstract";
import { DietDetails } from "../diet";
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { DietService } from "../diet.service";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { NgForOf } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MealDetailsForm } from "../../meal/meal-form/meal-form.component";

export type DietForm = {
  id: FormControl<string>,
  name: FormControl<string>,
  description: FormControl<string>,
}

export type DietDetailsForm = DietForm & {
  meals: FormArray<FormGroup<MealDetailsForm>>
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
    MatButtonModule
  ],
  templateUrl: './diet-form.component.html',
  styleUrl: './diet-form.component.scss'
})
export class DietFormComponent extends FormComponentAbstract<DietDetails> {
  readonly formGroup: FormGroup<DietDetailsForm> = new FormGroup<DietDetailsForm>({
    description: new FormControl<string>('', {nonNullable: true}),
    id: new FormControl<string>('', {nonNullable: true}),
    name: new FormControl<string>('', {nonNullable: true}),
    meals: new FormArray<FormGroup<MealDetailsForm>>([]),
  })

  readonly defaultFormGroupValue: DietDetails = {
    id: "",
    description: "",
    name: "",
    meals: []
  };

  constructor(route: ActivatedRoute, service: DietService) {
    super(route, service);
  }
}
