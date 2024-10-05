import {Component} from '@angular/core';
import { RouterModule } from "@angular/router";
import { FontAwesomeIconLibraryModule } from "../libraries/font-awesome-icon-library.module";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";

@Component({
  selector: 'cortado-home',
  standalone: true,
  imports: [
    RouterModule,
    FontAwesomeIconLibraryModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
}
