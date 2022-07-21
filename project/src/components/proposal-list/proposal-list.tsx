import { useState } from 'react';
import PlaceCard from '../place-card/place-card';
import {Offer} from '../../types/offers';

type Props = {
  offers: Offer[]
};

function ProposalList({offers}: Props): JSX.Element {
  const [, setActiveCardId] = useState(0);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard
          offer={offer}
          key={offer.id}
          onMouseOver={() => {
            setActiveCardId(offer.id);
          }}
          onMouseOut={() => setActiveCardId(0)}
        />
      ))}
    </div>
  );
}

export default ProposalList;
