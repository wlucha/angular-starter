export interface AuthStateModel {
  token: string | null;
  username: string | null;
  isAuthenticated: boolean;
  error: Error | null,

}
