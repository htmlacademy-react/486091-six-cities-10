import ProposalList from '../../components/proposal-list/proposal-list';
import Locations from '../../components/locations/locations';
import Layout from '../../components/layout/layout';
//import {offers} from '../../mocks/offers';
import {Offer} from '../../types/offers';
import { PageAttributes} from '../../const';

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
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{placesCount} places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                                      Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref={'#icon-arrow-select'}></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>

              <ProposalList offers={offers} />

            </section>
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </>
    </Layout>

  );
}
export default MainScreen;
