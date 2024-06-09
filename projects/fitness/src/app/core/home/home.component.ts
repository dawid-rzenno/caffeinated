import {Component} from '@angular/core';
import { RouterModule } from "@angular/router";
import { FontAwesomeIconLibraryModule } from "../libraries/font-awesome-icon-library.module";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule,
    FontAwesomeIconLibraryModule,
    MatButtonModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
}
