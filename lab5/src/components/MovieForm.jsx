import { useState } from 'react';
import StarRating from './StarRating.jsx';
import './MovieForm.css';

// Props: onAddMovie(title, rating, review) – callback that lives in App.jsx
function MovieForm({ onAddMovie }) {
  // Local "controlled input" state – only the form needs to know these
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState(3);
  const [review, setReview] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // stop the page from reloading
    if (title.trim() === '') return; // basic validation

    onAddMovie(title.trim(), rating, review.trim()); // send data UP to App

    // reset the form
    setTitle('');
    setRating(3);
    setReview('');
  };

  return (
    <form className="movie-form" onSubmit={handleSubmit}>
      <h2 className="movie-form__title">Add a Movie</h2>

      <div className="movie-form__row">
        <input
          className="movie-form__input"
          type="text"
          placeholder="Movie title, e.g. Interstellar"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <div className="movie-form__rating">
          <span className="movie-form__label">Rating:</span>
          <StarRating rating={rating} onRate={setRating} />
        </div>
      </div>

      <textarea
        className="movie-form__textarea"
        placeholder="Write a short review (optional)…"
        rows="2"
        value={review}
        onChange={(e) => setReview(e.target.value)}
      />

      <button className="movie-form__button" type="submit" disabled={!title.trim()}>
        ➕ Add to Watch List
      </button>
    </form>
  );
}

export default MovieForm;
