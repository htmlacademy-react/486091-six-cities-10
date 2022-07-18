import {renderRatingWidth} from '../../tools/tools';

type Props = {
  rating: number;
}

function Rating({rating}: Props): JSX.Element {
  return (
    <div className="place-card__rating rating">
      <div className="place-card__stars rating__stars">
        <span style={renderRatingWidth(rating)}></span>
        <span className="visually-hidden">Rating</span>
      </div>
    </div>
  );
}

export default Rating;
