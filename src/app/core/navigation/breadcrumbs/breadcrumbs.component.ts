import { Component, Inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { AsyncPipe, NgForOf, NgIf, NgTemplateOutlet } from "@angular/common";
import { Observable } from "rxjs";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { NAVIGATION_SERVICE_TOKEN, NavigationServiceInterface } from "../navigation-service.interface";

export type Breadcrumb = {
  label: string,
  url: string,
  navigate: boolean
};

@Component({
  selector: 'cortado-breadcrumbs',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink,
    AsyncPipe,
    NgIf,
    NgTemplateOutlet,
    FaIconComponent
  ],
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.scss'
})
export class BreadcrumbsComponent {
  public breadcrumbs$: Observable<Breadcrumb[]> = this.navigationService.breadcrumbs$;

  constructor(@Inject(NAVIGATION_SERVICE_TOKEN) private navigationService: NavigationServiceInterface) {}
}
