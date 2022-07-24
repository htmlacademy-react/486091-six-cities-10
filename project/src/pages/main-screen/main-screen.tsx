import Locations from '../../components/locations/locations';
import Layout from '../../components/layout/layout';
//import {offers} from '../../mocks/offers';
import {Offer} from '../../types/offers';
import { PageAttributes} from '../../const';
import CitiesWithPlaces from '../../components/cities-with-places/cities-with-places';
import CitiesNoPlaces from '../../components/cities-no-places/cities-no-places';

type MainScreenProps = {
  placesCount: number;
  offers: Offer[];
}

function MainScreen({placesCount, offers}: MainScreenProps): JSX.Element {
  return (
    <Layout pageAttributes={PageAttributes.Main}>
      <>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Locations />
        </div>
        <div className="cities">
          {offers ? <CitiesWithPlaces placesCount={placesCount} offers={offers} /> : <CitiesNoPlaces />}
        </div>
      </>
    </Layout>
  );
}
export default MainScreen;
