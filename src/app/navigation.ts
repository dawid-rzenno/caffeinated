export class NavigationNode {
  readonly name: string;

  id: number[] = [];
  path: string;
  breadcrumbName: string;
  nodes: NavigationNode[] = [];

  constructor(name: string, path: string) {
    this.name = name;
    this.breadcrumbName = name;
    this.path = path;
  }

  appendNodes(nodes: NavigationNode[]): NavigationNode {
    this.nodes = nodes.map((node: NavigationNode) => {
      node.path = this.path + node.path;
      node.breadcrumbName = `${this.breadcrumbName} > ${node.breadcrumbName}`;
      return node;
    })

    return this;
  }
}

export const NavigationNodes: NavigationNode[] = [
  new NavigationNode('Diets', 'food/diet').appendNodes([
    new NavigationNode('List', '/read/all'),
    new NavigationNode('Create', '/create'),
  ]),
  new NavigationNode('Meals', 'food/meal').appendNodes([
    new NavigationNode('List', '/read/all'),
    new NavigationNode('Create', '/create'),
  ]),
  new NavigationNode('Beverages', 'food/beverage').appendNodes([
    new NavigationNode('List', '/read/all'),
    new NavigationNode('Create', '/create'),
  ]),
  new NavigationNode('Ingredients', 'food/ingredient').appendNodes([
    new NavigationNode('List', '/read/all'),
    new NavigationNode('Create', '/create'),
  ]),
]
