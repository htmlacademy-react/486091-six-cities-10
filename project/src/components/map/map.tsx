
import {URL_MARKER_CURRENT, URL_MARKER_DEFAULT} from '../../const';
import useMap from '../../hooks/use-map';
import {useEffect, useRef} from 'react';
import leaflet, {Icon, Marker} from 'leaflet';
import {Points} from '../../types/offers';
import 'leaflet/dist/leaflet.css';
type MapProps = {
  points: Points
}

function Map({points}: MapProps) {
  const mapRef = useRef(null);

  const currentCity = points[0].city;

  const map = useMap(mapRef, currentCity);

  const defaultCustomIcon = new Icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude
        });

        marker
          .setIcon(defaultCustomIcon)
          .addTo(map);
      });
    }
  }, [map, points]);

  return (
    <section
      ref={mapRef}
      className="cities__map map"
    >

    </section>
  );
}

export default Map;
