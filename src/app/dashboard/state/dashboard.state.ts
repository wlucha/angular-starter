import { State, Action, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';

export interface DashboardStateModel {
  // define geospatial data properties here
}

@State<DashboardStateModel>({
  name: 'dashboard',
  defaults: {
    // initial default values
  },
})
@Injectable()
export class DashboardState {
  // Add actions later to update geospatial data
}
