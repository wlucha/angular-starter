import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Login, Logout } from '../actions/auth.actions';
import { AuthStateModel } from '../models/auth.model';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    token: null,
    username: null,
    isAuthenticated: false,
    error: null,

  }
})
@Injectable()
export class AuthState {
  constructor(private authService: AuthService, private router: Router) { }

  @Selector()
  static isAuthenticated(state: AuthStateModel): boolean {
    return state.isAuthenticated;
  }

  @Selector()
  static username(state: AuthStateModel): string | null {
    return state.username;
  }

  @Action(Login)
  login(ctx: StateContext<AuthStateModel>, action: Login) {
    return this.authService.login(action.payload.username, action.payload.password).pipe(
      tap((result) => {
        ctx.patchState({
          token: result.token,
          username: result.username,
          isAuthenticated: true
        });
        this.router.navigate(['/dashboard']);
      }),
      catchError((error) => {
        ctx.patchState({
          token: null,
          username: null,
          isAuthenticated: false,
          error: error.message || 'Login failed',
        });
        return throwError(() => error);
      })
    );
  }

  @Action(Logout)
  logout(ctx: StateContext<AuthStateModel>) {
    return this.authService.logout().pipe(
      tap(() => {
        ctx.setState({
          token: null,
          username: null,
          isAuthenticated: false,
          error: null,
        });
        this.router.navigate(['/login']);
      })
    );
  }
}
