import { Breadcrumb } from "./breadcrumbs/breadcrumbs.component";

export type NavigationNodeToDirectUrlMapType = Record<string, NavigationNode>;

export class NavigationNode {
  readonly label: string;
  readonly urlSegment: string;
  readonly navigate: boolean;

  private _url: string | null = null;
  get url(): string {
    if (this._url) {
      return this._url
    }

    return this._url = this.parentRef
      ? this.getAncestorsUrl(this.parentRef) + this.urlSegment
      : this.urlSegment;
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

  get breadcrumb(): Breadcrumb {
    return { label: this.label, url: this.url, navigate: this.navigate }
  }

  readonly nodes: NavigationNode[] | null = null;

  private parentRef: NavigationNode | null = null;

  constructor(label: string, urlSegment: string, navigate: boolean = true, children: NavigationNode[] = []) {
    this.nodes = children.map((child: NavigationNode) => {
      child.parentRef = this;
      return child;
    });

    this.label = label;
    this.urlSegment = urlSegment;
    this.navigate = navigate;
  }

  protected getAncestorsUrl(parentNavigationNode: NavigationNode): string {
    return parentNavigationNode.parentRef
      ? this.getAncestorsUrl(parentNavigationNode.parentRef) + parentNavigationNode.urlSegment
      : parentNavigationNode.urlSegment;
  }

  protected getAncestorsBreadcrumbs(parentNavigationNode: NavigationNode): Breadcrumb[] {
    return parentNavigationNode.parentRef
      ? [...this.getAncestorsBreadcrumbs(parentNavigationNode.parentRef), parentNavigationNode.breadcrumb]
      : [parentNavigationNode.breadcrumb];
  }

  static mapNavigationNodesToDirectUrls(children: NavigationNode[]): NavigationNodeToDirectUrlMapType {
    return children.reduce((urlMap, child) => {
      urlMap[child.url] = child;

      if (child.nodes?.length) {
        return {...urlMap, ...this.mapNavigationNodesToDirectUrls(child.nodes)}
      }

      return urlMap;
    }, {} as NavigationNodeToDirectUrlMapType)
  }
}
