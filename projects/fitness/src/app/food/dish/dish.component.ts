import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Dish } from "../dish";
import { JsonPipe } from "@angular/common";

@Component({
  selector: 'app-dish',
  standalone: true,
  imports: [
    JsonPipe
  ],
  templateUrl: './dish.component.html',
  styleUrl: './dish.component.scss'
})
export class DishComponent implements OnInit {
  dish?: Dish = undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe((data) => this.dish = data['dish'])
  }
}
