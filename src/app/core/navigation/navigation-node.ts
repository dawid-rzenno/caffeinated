import { Breadcrumb } from "./breadcrumbs/breadcrumbs.component";

export type NavigationNodeToDirectUrlMapType = Record<string, NavigationNode>;

export class NavigationNode {
  readonly label: string;
  readonly breadcrumb: Breadcrumb;
  readonly url: string;

  private _directUrl: string | null = null;
  get directUrl(): string {
    if (this._directUrl) {
      return this._directUrl
    }

    return this._directUrl = this.parentRef
      ? this.getAncestorsUrl(this.parentRef) + this.url
      : this.url;
  };

  private _breadcrumbs: Breadcrumb[] | null = null;
  get breadcrumbs(): Breadcrumb[] {
    if (this._breadcrumbs) {
      return this._breadcrumbs
    }

    return this._breadcrumbs = this.parentRef
      ? [...this.getAncestorsBreadcrumbs(this.parentRef), this.breadcrumb]
      : [this.breadcrumb];
  }

  private nodes: NavigationNode[] | null = null;
  private parentRef: NavigationNode | null = null;

  constructor(label: string, url: string, children: NavigationNode[] = []) {
    this.label = label;
    this.breadcrumb = { label, url };
    this.url = url;
    this.nodes = children.map((child: NavigationNode) => child.parentRef = this);
  }

  protected getAncestorsUrl(parentNavigationNode: NavigationNode): string {
    return parentNavigationNode.parentRef
      ? this.getAncestorsUrl(parentNavigationNode.parentRef) + parentNavigationNode.directUrl
      : parentNavigationNode.directUrl;
  }

  protected getAncestorsBreadcrumbs(parentNavigationNode: NavigationNode): Breadcrumb[] {
    return parentNavigationNode.parentRef
      ? [...this.getAncestorsBreadcrumbs(parentNavigationNode.parentRef), parentNavigationNode.breadcrumb]
      : [parentNavigationNode.breadcrumb];
  }

  static mapNavigationNodesToDirectUrls(children: NavigationNode[]): NavigationNodeToDirectUrlMapType {
    return children.reduce((urlMap, child) => {
      urlMap[child.directUrl] = child;

      if (child.nodes?.length) {
        return {...urlMap, ...this.mapNavigationNodesToDirectUrls(child.nodes)}
      }

      return urlMap;
    }, {} as NavigationNodeToDirectUrlMapType)
  }
}
