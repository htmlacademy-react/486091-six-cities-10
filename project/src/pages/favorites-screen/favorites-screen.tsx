import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import {Offer} from '../../types/offers';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';

type FavoritesProps = {
  offers: Offer[];
}

function FavoritesScreen({offers}: FavoritesProps): JSX.Element {
  return (
    <div className={`page ${offers ? '' : 'favorites--empty'}`}>
      <Header />
      <main className={`page__main page__main--favorites ${offers ? '' : 'page__main--favorites-empty'}`}>
        <div className="page__favorites-container container">
          <FavoritesEmpty />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FavoritesScreen;
