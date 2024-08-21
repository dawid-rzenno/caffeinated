import {Component} from '@angular/core';
import { RouterModule } from "@angular/router";
import { StatusModule } from "../../status/status.module";

@Component({
  selector: 'cortado-main',
  standalone: true,
  imports: [RouterModule, StatusModule],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

}
