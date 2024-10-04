import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { AsyncPipe, NgForOf } from "@angular/common";
import { Observable } from "rxjs";
import { NavigationService } from "../navigation.service";

export type Breadcrumb = {
  label: string,
  url: string
};

@Component({
  selector: 'cortado-breadcrumbs',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink,
    AsyncPipe
  ],
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.scss'
})
export class BreadcrumbsComponent {
  public breadcrumbs$: Observable<Breadcrumb[]> = this.navigationService.breadcrumbs$;

  constructor(private navigationService: NavigationService) {}
}
