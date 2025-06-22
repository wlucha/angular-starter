// app.routes.ts or dashboard.routes.ts
import { Routes } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { DashboardStateModule } from './dashboard.state.module';

export const dashboardRoutes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./components/dashboard.component').then(m => m.DashboardComponent),
    providers: [
      importProvidersFrom(DashboardStateModule), // lazy load the NGXS state providers here
    ],
  },
  // ...other routes
];
