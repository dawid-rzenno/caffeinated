import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from "@angular/router";
import { filter, map, Observable } from "rxjs";
import { Breadcrumb } from "../../core/navigation/breadcrumbs/breadcrumbs.component";
import { NavigationNode, NavigationNodeToDirectUrlMapType } from "../../core/navigation/navigation-node";
import { NavigationServiceInterface } from "../../core/navigation/navigation-service.interface";

@Injectable()
export class NavigationService implements NavigationServiceInterface {

  readonly navigationNodes: NavigationNode[] = [
    new NavigationNode('Kitchen', '', false, [
      new NavigationNode('Diets', '/diet', false, [
        new NavigationNode('See all diets', '/read/all'),
        new NavigationNode('Add a diet', '/create'),
      ]),
      new NavigationNode('Meals', '/meal',  false,[
        new NavigationNode('See all meals', '/read/all'),
        new NavigationNode('Add a meal', '/create'),
      ]),
      new NavigationNode('Beverages', '/beverage', false, [
        new NavigationNode('See all beverages', '/read/all'),
        new NavigationNode('Add a beverage', '/create'),
      ]),
      new NavigationNode('Ingredients', '/ingredient', false, [
        new NavigationNode('See all ingredients', '/read/all'),
        new NavigationNode('Add an ingredient', '/create'),
      ]),
    ]),
    new NavigationNode('Gym', '', false, [
      new NavigationNode('Workouts', '/workout', false, [
        new NavigationNode('See all workouts', '/read/all'),
        new NavigationNode('Add a workout', '/create'),
      ]),
      new NavigationNode('Exercises', '/exercise', false, [
        new NavigationNode('See all exercises', '/read/all'),
        new NavigationNode('Add an exercise', '/create'),
      ])
    ]),

  ];

  readonly pageNotFoundNavigationNode: NavigationNode = new NavigationNode(
    '404 Page Not Found',
    '/page-not-found',
    false
  );

  readonly navigationNodeUrls: NavigationNodeToDirectUrlMapType = NavigationNode.mapNavigationNodesToDirectUrls([
    ...this.navigationNodes,
    this.pageNotFoundNavigationNode
  ]);

  readonly breadcrumbs$: Observable<Breadcrumb[]> = this.router.events.pipe(
    filter(event => event instanceof NavigationEnd),
    map(() => {
      let url: string = this.router.url;

      // ToDo: refactor it into something less ugly
      if (!url.includes('read/all') && url.includes('read')) {
        const splitUrl: string[] = url.split('/');

        return [...this.navigationNodeUrls[splitUrl.slice(0, -2).join('/')].breadcrumbs, this.createDetailsBreadcrumb(url)];
      }

      const currentNavigationNode: NavigationNode = this.navigationNodeUrls[url];

      return currentNavigationNode
        ? currentNavigationNode.breadcrumbs
        : [this.pageNotFoundNavigationNode.breadcrumb];
    })
  );

  constructor(private router: Router) {}

  protected createDetailsBreadcrumb(url: string): Breadcrumb {
    return {
      label: 'Details',
      url: url,
      navigate: false
    }
  }
}
