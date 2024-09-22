import { Component } from '@angular/core';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { RouterModule } from "@angular/router";
import { NavigationNode, NavigationNodes } from "../../../navigation";
import { JsonPipe } from "@angular/common";
import { MatTreeModule } from "@angular/material/tree";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: 'cortado-side-nav',
  standalone: true,
  imports: [
    FaIconComponent,
    RouterModule,
    JsonPipe,
    MatTreeModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {

  readonly dataSource: NavigationNode[] = NavigationNodes;

  readonly nodesAccessor = (branch: NavigationNode) => branch.nodes ?? [];
  readonly hasNode = (_: number, branch: NavigationNode) => !!branch.nodes && branch.nodes.length > 0;

  constructor() {
    console.log(this.dataSource)
  }
}
