import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./home/home.page').then( m => m.HomePage)
      },
      {
        path: 'search',
        loadComponent: () =>
          import('./search/search.page').then( m => m.SearchPage)
      },
      {
        path: 'new',
        loadComponent: () =>
          import('./new/new.page').then( m => m.NewPage)
      },
      {
        path: 'activity',
        loadComponent: () =>
          import('./activity/activity.page').then( m => m.ActivityPage)
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('./profile/profile.page').then( m => m.ProfilePage)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full',
  },
];
