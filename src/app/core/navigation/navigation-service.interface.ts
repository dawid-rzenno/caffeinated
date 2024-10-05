import { NavigationNode } from "./navigation-node";
import { Observable } from "rxjs";
import { Breadcrumb } from "./breadcrumbs/breadcrumbs.component";

export interface NavigationServiceInterface {
  navigationNodes: NavigationNode[];
  breadcrumbs$: Observable<Breadcrumb[]>;
}
