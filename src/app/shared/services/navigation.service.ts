import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from "@angular/router";
import { filter, map, Observable } from "rxjs";
import { Breadcrumb } from "../../core/navigation/breadcrumbs/breadcrumbs.component";
import { NavigationNode, NavigationNodeToDirectUrlMapType } from "../../core/navigation/navigation-node";
import { NavigationServiceInterface } from "../../core/navigation/navigation-service.interface";

@Injectable()
export class NavigationService implements NavigationServiceInterface {

  readonly navigationNodes: NavigationNode[] = [
    new NavigationNode('Kitchen', '', [
      new NavigationNode('Diets', '/diet', [
        new NavigationNode('See all diets', '/read/all'),
        new NavigationNode('Details', '/read/details'),
        new NavigationNode('Edit', '/edit'),
        new NavigationNode('Create a diet', '/create'),
      ]),
      new NavigationNode('Meals', '/meal',[
        new NavigationNode('See all meals', '/read/all'),
        new NavigationNode('Details', '/read/details'),
        new NavigationNode('Edit', '/edit'),
        new NavigationNode('Create a meal', '/create'),
      ]),
      new NavigationNode('Beverages', '/beverage', [
        new NavigationNode('See all beverages', '/read/all'),
        new NavigationNode('Details', '/read/details'),
        new NavigationNode('Edit', '/edit'),
        new NavigationNode('Create a beverage', '/create'),
      ]),
      new NavigationNode('Ingredients', '/ingredient', [
        new NavigationNode('See all ingredients', '/read/all'),
        new NavigationNode('Details', '/read/details'),
        new NavigationNode('Edit', '/edit'),
        new NavigationNode('Create an ingredient', '/create'),
      ]),
    ]),
    new NavigationNode('Gym', '', [
      new NavigationNode('Workouts', '/workout', [
        new NavigationNode('See all workouts', '/read/all'),
        new NavigationNode('Details', '/read/details'),
        new NavigationNode('Edit', '/edit'),
        new NavigationNode('Create a workout', '/create'),
      ]),
      new NavigationNode('Exercises', '/exercise', [
        new NavigationNode('See all exercises', '/read/all'),
        new NavigationNode('Details', '/read/details'),
        new NavigationNode('Edit', '/edit'),
        new NavigationNode('Create an exercise', '/create'),
      ])
    ]),
  ];

  readonly pageNotFoundNavigationNode: NavigationNode = new NavigationNode(
    '404 Page Not Found',
    '/page-not-found'
  );

  readonly homeNavigationNode: NavigationNode = new NavigationNode(
    'Home',
    '/home'
  );

  readonly navigationNodeUrls: NavigationNodeToDirectUrlMapType = NavigationNode.mapNavigationNodesToDirectUrls([
    ...this.navigationNodes,
    this.pageNotFoundNavigationNode,
    this.homeNavigationNode,
  ]);

  readonly breadcrumbs$: Observable<Breadcrumb[]> = this.router.events.pipe(
    filter(event => event instanceof NavigationEnd),
    map(() => {
      let url: string = this.router.url;

      if (url.includes('details')) {
        const splitUrl: string[] = url.split('/');

        return [
          ...this.navigationNodeUrls[splitUrl.slice(0, -1).join('/')].breadcrumbs,
          this.createIdBreadcrumb(url, splitUrl[splitUrl.length - 1])
        ];
      }

      if (url.includes('edit')) {
        const splitUrl: string[] = url.split('/');

        return [
          ...this.navigationNodeUrls[splitUrl.slice(0, -1).join('/')].breadcrumbs,
          this.createIdBreadcrumb(url, splitUrl[splitUrl.length - 1])
        ];
      }


      const currentNavigationNode: NavigationNode = this.navigationNodeUrls[url];

      return currentNavigationNode
        ? currentNavigationNode.breadcrumbs
        : [this.pageNotFoundNavigationNode.breadcrumb];
    })
  );

  constructor(private router: Router) {}

  protected createIdBreadcrumb(url: string, id: string): Breadcrumb {
    return {
      label: id,
      url,
    }
  }
}
