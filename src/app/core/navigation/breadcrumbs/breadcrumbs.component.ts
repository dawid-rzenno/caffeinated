import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { AsyncPipe, NgForOf, NgIf, NgTemplateOutlet } from "@angular/common";
import { Observable } from "rxjs";
import { NavigationService } from "../../../shared/services/navigation.service";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";

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

  constructor(private navigationService: NavigationService) {}
}
