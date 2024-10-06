import { Component, inject, OnInit } from '@angular/core';
import { FormComponentAbstract } from "../../shared/abstracts/form-component.abstract";
import { DietDetails } from "../diet";
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { DietService } from "../diet.service";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { AsyncPipe, NgForOf, NgTemplateOutlet } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { Meal } from "../../meal/meal";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MealTableComponent } from "../../meal/meal-table/meal-table.component";
import { DietMealControlComponent } from "../diet-meal-control/diet-meal-control.component";
import { NumberToAdjectivePipe } from "../../shared/number-to-adjective.pipe";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import {
  DietMealControlDialogComponent
} from "../diet-meal-control/diet-meal-control-dialog/diet-meal-control-dialog.component";

export type DietForm = {
  id: FormControl<number | undefined>,
  name: FormControl<string>,
  description: FormControl<string>,
}

export type DietDetailsForm = DietForm & {
  meals: FormArray<FormControl<Meal>>
}

@Component({
  selector: 'cortado-diet-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    NgForOf,
    MatCardModule,
    MatButtonModule,
    MatAutocompleteModule,
    AsyncPipe,
    MealTableComponent,
    NgTemplateOutlet,
    DietMealControlComponent,
    NumberToAdjectivePipe
  ],
  templateUrl: './diet-form.component.html',
  styleUrl: './diet-form.component.scss'
})
export class DietFormComponent extends FormComponentAbstract<DietDetails> implements OnInit {
  readonly mealsFormArray: FormArray<FormControl<Meal>> = new FormArray<FormControl<Meal>>([]);

  readonly formGroup: FormGroup<DietDetailsForm> = new FormGroup<DietDetailsForm>({
    id: new FormControl<number | undefined>(undefined, { nonNullable: true }),
    name: new FormControl<string>("", { nonNullable: true }),
    description: new FormControl<string>("", { nonNullable: true }),
    meals: this.mealsFormArray
  });

  readonly defaultFormGroupValue: DietDetails = {
    id: undefined,
    name: "",
    description: "",
    meals: []
  };

  protected readonly matDialog: MatDialog = inject(MatDialog);

  constructor(route: ActivatedRoute, service: DietService) {
    super(route, service);
  }

  override ngOnInit() {
    super.ngOnInit();
    if (this.details) {
      for (let meal of this.details.meals) {
        this.addNewMeal(meal);
      }
    }
  }

  openDialog(): void {
    const dialogRef: MatDialogRef<DietMealControlDialogComponent, Meal> = this.matDialog.open(DietMealControlDialogComponent);

    dialogRef.afterClosed().subscribe((meal: Meal | undefined) => {
      if (meal) {
        this.addNewMeal(meal);
      }
    });
  }

  protected addNewMeal(meal: Meal) {
    this.mealsFormArray.push(
      new FormControl<Meal>(meal) as FormControl<Meal>
    )
  }


}
