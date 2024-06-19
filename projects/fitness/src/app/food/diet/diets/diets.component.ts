import { Component } from '@angular/core';
import { RoutedTableComponentAbstract } from "../../table-component-abstract.directive";
import { Diet } from "../diet";
import { ActivatedRoute } from "@angular/router";
import { DietTableComponent } from "../diet-table/diet-table.component";

@Component({
  selector: 'app-diets',
  standalone: true,
  imports: [
    DietTableComponent
  ],
  templateUrl: './diets.component.html',
  styleUrl: './diets.component.scss'
})
export class DietsComponent extends RoutedTableComponentAbstract<Diet> {
  constructor(route: ActivatedRoute) {
    super(route);
  }
}
