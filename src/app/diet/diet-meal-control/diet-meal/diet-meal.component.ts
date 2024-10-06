import { Component, Input } from '@angular/core';
import { Meal } from "../../../meal/meal";

@Component({
  selector: 'cortado-diet-meal',
  standalone: true,
  imports: [],
  templateUrl: './diet-meal.component.html',
  styleUrl: './diet-meal.component.scss'
})
export class DietMealComponent {
  @Input({required: true}) meal!: Meal;
}
