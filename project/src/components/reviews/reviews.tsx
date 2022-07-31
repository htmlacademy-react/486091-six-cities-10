import Rating from '../rating/rating';
import ReviewsItem from '../reviews-item/reviews-item';
import {Review} from '../../types/offers';
import ReviewsForm from '../reviews-form/reviews-form';

type ReviewsProps = {
  reviews: Review[];
}

function Reviews({reviews}: ReviewsProps) {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">1</span>
      </h2>
      <ul className="reviews__list">
        <ReviewsItem review={reviews[1]} />
      </ul>
      <ReviewsForm />
    </section>
  );
}

export default Reviews;
