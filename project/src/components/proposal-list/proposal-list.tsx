import PlaceCard from '../place-card/place-card';
import {Offer} from '../../types/offers';

type Props = {
  offers: Offer[]
};

function ProposalList({offers}: Props): JSX.Element {
  return (
    <>
      <PlaceCard offer={offers[0]}/>
      <PlaceCard offer={offers[1]}/>
      <PlaceCard offer={offers[2]}/>
      <PlaceCard offer={offers[3]}/>
    </>
  );
}

export default ProposalList;
