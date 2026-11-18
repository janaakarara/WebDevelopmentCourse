import './StarRating.css';

// Reusable, clickable 1–5 star picker.
// Props: rating (number), onRate(newRating) callback
function StarRating({ rating, onRate }) {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="star-rating" role="radiogroup" aria-label="Star rating">
      {stars.map((star) => (
        <button
          key={star}
          type="button" // prevents submitting the parent form
          className={`star-rating__star ${star <= rating ? 'is-active' : ''}`}
          onClick={() => onRate(star)}
          aria-label={`${star} star${star > 1 ? 's' : ''}`}
          aria-checked={star === rating}
          role="radio"
        >
          ⭐
        </button>
      ))}
    </div>
  );
}

export default StarRating;
