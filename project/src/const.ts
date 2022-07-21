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

export const PageAttributes = {
  Main: {
    'Title': 'Cities',
    'MainClassName': 'page__main page__main--index',
    'BodyClassName': 'page page--gray page--main',
  },
  Room: {
    'Title': '6 cities',
    'MainClassName': 'page__main page__main--property',
    'BodyClassName': 'page',
  },
  Favorites: {
    'Title': 'Saved listing',
    'MainClassName': 'page__main page__main--favorites',
    'BodyClassName': 'page',
  },
  Login: {
    'Title': 'Sign in',
    'MainClassName': 'page__main page__main--login',
    'BodyClassName': 'page page--gray page--login',
  }
} as const;
