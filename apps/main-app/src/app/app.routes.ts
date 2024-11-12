import { Route } from '@angular/router';
import { TabsComponent } from './tabs.component';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: '0',
    pathMatch: 'full',
  },
  {
    path: ':selectedIndex',
    component: TabsComponent
  }
];
