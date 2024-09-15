import {Component} from '@angular/core';
import { RouterLink } from "@angular/router";
import { MatButton } from "@angular/material/button";

@Component({
  selector: 'cortado-not-found',
  templateUrl: './not-found.component.html',
  standalone: true,
  imports: [
    RouterLink,
    MatButton
  ],
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {
}
