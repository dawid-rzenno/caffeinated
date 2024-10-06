import { Component, inject, Input } from '@angular/core';
import { MatButton } from "@angular/material/button";
import { ControlValueAccessor } from "@angular/forms";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { DietMealControlDialogComponent } from "./diet-meal-control-dialog/diet-meal-control-dialog.component";
import { Meal } from "../../meal/meal";
import { DietMealComponent } from "./diet-meal/diet-meal.component";
import { NgIf } from "@angular/common";

export type OnChangeFn = (value: string) => void;
export type OnTouchedFn = () => void;

@Component({
  selector: 'cortado-diet-meal-control',
  standalone: true,
  imports: [
    MatButton,
    DietMealComponent,
    NgIf
  ],
  templateUrl: './diet-meal-control.component.html',
  styleUrl: './diet-meal-control.component.scss'
})
export class DietMealControlComponent implements ControlValueAccessor {
  @Input({required: true}) label!: string;

  protected meal: Meal | undefined;

  private _onChange: undefined | OnChangeFn;
  private _onTouched: undefined | OnTouchedFn;

  protected readonly matDialog: MatDialog = inject(MatDialog);

  registerOnChange(fn: OnChangeFn): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: OnTouchedFn): void {
    this._onTouched = fn;
  }

  writeValue(meal: Meal): void {
    this.meal = meal;
  }

  openDialog(): void {
    const dialogRef: MatDialogRef<DietMealControlDialogComponent> = this.matDialog.open(DietMealControlDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result !== undefined) {
        this.writeValue(result)
      }
    });
  }
}
