import {Offer} from '../../types/offers';
import {cityList} from '../../const';
import FavoritesListItem from '../favorites-list-item/favorites-list-item';

type Props = {
  offers: Offer[],
}

function FavoritesList({offers}: Props): JSX.Element {
  return (
    <ul className="favorites__list">
      {
        cityList.map((cityName) => (<FavoritesListItem offers={offers} key={cityName} city={cityName} />))
      }
    </ul>
  );
}

export default FavoritesList;
