import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from "@angular/router";
import { filter, map, Observable } from "rxjs";
import { Breadcrumb } from "./breadcrumbs/breadcrumbs.component";
import { NavigationNode, NavigationNodeToDirectUrlMapType } from "./navigation-node";

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  readonly navigationNodes: NavigationNode[] = [
    new NavigationNode('Home', '',[
      new NavigationNode('Foods', '/food', [
        new NavigationNode('Diets', '/diet', [
          new NavigationNode('List', '/read/all'),
          new NavigationNode('Create', '/create'),
        ]),
        new NavigationNode('Meals', '/meal', [
          new NavigationNode('List', '/read/all'),
          new NavigationNode('Create', '/create'),
        ]),
        new NavigationNode('Beverages', '/beverage', [
          new NavigationNode('List', '/read/all'),
          new NavigationNode('Create', '/create'),
        ]),
        new NavigationNode('Ingredients', '/ingredient', [
          new NavigationNode('List', '/read/all'),
          new NavigationNode('Create', '/create'),
        ]),
      ]),
    ]),
  ];

  readonly pageNotFoundNavigationNode: NavigationNode = new NavigationNode('404 Page Not Found', '/page-not-found');

  readonly navigationNodeUrls: NavigationNodeToDirectUrlMapType = NavigationNode.mapNavigationNodesToDirectUrls([
    ...this.navigationNodes,
    this.pageNotFoundNavigationNode
  ]);

  readonly pageNotFoundBreadcrumb: Breadcrumb = {
    label: '404 Page Not Found',
    url: '/page-not-found',
  };

  readonly homeBreadcrumb: Breadcrumb = {
    label: 'Home',
    url: '/home'
  };

  readonly breadcrumbs$: Observable<Breadcrumb[]> = this.router.events.pipe(
    filter(event => event instanceof NavigationEnd),
    map(() => {
      const currentNavigationNode: NavigationNode = this.navigationNodeUrls[this.router.url];

      return currentNavigationNode
        ? [this.homeBreadcrumb, ...currentNavigationNode.breadcrumbs]
        : [this.pageNotFoundBreadcrumb];
    })
  );

  constructor(private router: Router) {}
}
