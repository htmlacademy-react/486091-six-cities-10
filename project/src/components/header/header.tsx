import Logo from '../logo/logo';
import UserNavigation from '../user-navigation/user-navigation';
import {AuthorizationStatus} from '../../const';

function Header(): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <UserNavigation authorizationStatus={AuthorizationStatus.Auth} />
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
