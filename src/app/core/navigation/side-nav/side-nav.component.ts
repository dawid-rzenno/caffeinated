import { AfterViewInit, Component, Inject, ViewChild } from '@angular/core';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { RouterModule } from "@angular/router";
import { NavigationNode } from "../navigation-node";
import { JsonPipe, NgClass, NgStyle, NgTemplateOutlet } from "@angular/common";
import { MatTree, MatTreeModule } from "@angular/material/tree";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { NAVIGATION_SERVICE_TOKEN, NavigationServiceInterface } from "../navigation-service.interface";

@Component({
  selector: 'cortado-side-nav',
  standalone: true,
  imports: [
    FaIconComponent,
    RouterModule,
    JsonPipe,
    MatTreeModule,
    MatIconModule,
    MatButtonModule,
    NgTemplateOutlet,
    NgStyle,
    NgClass
  ],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent implements AfterViewInit {
  @ViewChild('tree') tree!: MatTree<NavigationNode, NavigationNode>;

  readonly dataSource: NavigationNode[] = this.navigationService.navigationNodes;

  readonly childrenAccessor = (node: NavigationNode) => node.nodes ?? [];
  readonly hasNode = (_: number, node: NavigationNode) => !!node.nodes && node.nodes.length > 0;
  readonly trackBy = (_: number, node: NavigationNode) => node.url;

  constructor(@Inject(NAVIGATION_SERVICE_TOKEN) private navigationService: NavigationServiceInterface) {}

  public ngAfterViewInit(): void {
    this.expandTree();
  }

  protected expandTree(): void {
    for (let node of this.dataSource) {
      this.tree.expandDescendants(node);
    }
  }
}
