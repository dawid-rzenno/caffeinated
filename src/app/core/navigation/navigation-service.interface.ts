import { NavigationNode } from "./navigation-node";
import { Observable } from "rxjs";
import { Breadcrumb } from "./breadcrumbs/breadcrumbs.component";
import { InjectionToken } from "@angular/core";

export const NAVIGATION_SERVICE_TOKEN =
  new InjectionToken<NavigationServiceInterface>('navigation-service');

export interface NavigationServiceInterface {
  navigationNodes: NavigationNode[];
  breadcrumbs$: Observable<Breadcrumb[]>;
}
