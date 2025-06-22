import { Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/components/dashboard.component').then(m => m.DashboardComponent),
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];
