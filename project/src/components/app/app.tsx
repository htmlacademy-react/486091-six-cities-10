import {Route, BrowserRouter, Routes} from 'react-router-dom';
import MainScreen from '../../pages/main-screen/main-screen';
import {AppRoute, AuthorizationStatus} from '../../const';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import RoomScreen from '../../pages/room-screen/room-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import PageNotFoundScreen from '../../pages/page-not-found-screen/page-not-found-screen';
import PrivateRoute from '../private-route/private-route';

type AppScreenProps = {
  placesCount: number;
}

function App({placesCount}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainScreen placesCount={placesCount} />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <FavoritesScreen />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Room}
          element={<RoomScreen />}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginScreen />}
        />
        <Route
          path={AppRoute.PageNotFound}
          element={<PageNotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
