import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { RouterModule } from '@angular/router';
import { DashboardState } from './state/dashboard.state';
import { dashboardRoutes } from './dashboard.routes';

@NgModule({
  imports: [
    NgxsModule.forFeature([DashboardState]),
    RouterModule.forChild(dashboardRoutes),
  ]
})
export class DashboardStateModule {}
