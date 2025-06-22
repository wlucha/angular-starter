import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {
  login(username: string, password: string) {
    const isValid = username === 'admin' && password === 'admin';

    return (isValid
      ? of({ token: 'mock-token-123', username })
      : throwError(() => new Error('Invalid credentials'))
    ).pipe(delay(1000));

  }

  logout() {
    return of(true).pipe(delay(500));
  }
}
