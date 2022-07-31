import {Offer} from '../../types/offers';
import FavoritesCard from '../favorites-card/favorites-card';

type Props = {
  offers: Offer[],
  city: string,
}

function FavoritesListItem({offers, city}: Props) {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((offer:Offer) => {
          if (city === offer.city.name) {
            return (<FavoritesCard offer={offer} key={offer.id} />);
          }
        })}
      </div>
    </li>
  );
}

export default FavoritesListItem;
