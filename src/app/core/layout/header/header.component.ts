
import { Component } from '@angular/core';
import { RouterModule } from "@angular/router";
import { FontAwesomeIconLibraryModule } from "../../libraries/font-awesome-icon-library.module";
import { MatMenuModule } from "@angular/material/menu";
import { NgForOf, NgIf } from "@angular/common";
import { HeaderLink } from "./common/header-link";
import { headerLinks } from "./common/header-links";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterModule,
    FontAwesomeIconLibraryModule,
    MatMenuModule,
    NgForOf,
    NgIf
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public readonly Items: HeaderLink[] = headerLinks;
}
