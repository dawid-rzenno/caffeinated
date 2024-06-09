import {HeaderLink} from "./header-link";

export const headerLinks: HeaderLink[] = [
  {
    label: 'Diet',
    links: [
      {
        label: 'All',
        routerLink: ['/food/diet/read/all']
      },
      {
        label: 'Create',
        routerLink: ['/food/diet/create']
      },
    ]
  },
  {
    label: 'Meal',
    links: [
      {
        label: 'All',
        routerLink: ['/food/meal/read/all']
      },
      {
        label: 'Create',
        routerLink: ['/food/meal/create']
      },
    ]
  },
  {
    label: 'Ingredient',
    links: [
      {
        label: 'All',
        routerLink: ['/food/ingredient/read/all']
      },
      {
        label: 'Create',
        routerLink: ['/food/ingredient/create']
      },
    ]
  },
  {
    label: 'Shopping List',
    links: [
      {
        label: 'All',
        routerLink: ['/food/shopping-list/read/all']
      },
      {
        label: 'Create',
        routerLink: ['/food/shopping-list/create']
      },
    ]
  },
  {
    label: 'User',
    links: [
      {
        label: 'Sign In',
        routerLink: ['/auth/sign-in']
      },
      {
        label: 'Sign Out',
        routerLink: ['/auth/sign-out']
      },
      {
        label: 'Sign Up',
        routerLink: ['/auth/sign-up']
      },
    ]
  },
];
