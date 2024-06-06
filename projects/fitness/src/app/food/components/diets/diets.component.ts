import { Component } from '@angular/core';
import { ItemsComponentAbstract } from "../../abstracts/items-component.abstract";
import { Diet } from "../diet-details/diet";
import { ActivatedRoute } from "@angular/router";
import { DietService } from "../../services/diet.service";

@Component({
  selector: 'app-diets',
  standalone: true,
  imports: [],
  templateUrl: './diets.component.html',
  styleUrl: './diets.component.scss'
})
export class DietsComponent extends ItemsComponentAbstract<Diet> {
  constructor(route: ActivatedRoute, service: DietService) {
    super(route, service);
  }
}
