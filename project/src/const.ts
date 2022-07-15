export enum AppRoute {
  Favorites = '/favorites',
  Room = '/offer/:id',
  PageNotFound = '*',
  Root = '/',
  Login = '/login'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
