import { useState } from 'react';
import './MovieCard.css';

// Props: movie {id, title, rating, review}, onDelete(id), onUpdateReview(id, text)
function MovieCard({ movie, onDelete, onUpdateReview }) {
  // Local UI state: is the review editor open? what is being typed?
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState(movie.review);

  // Turn a number into that many star emojis: 3 -> "⭐⭐⭐"
  const stars = '⭐'.repeat(movie.rating);

  const handleSave = () => {
    onUpdateReview(movie.id, draft.trim()); // send the change UP to App
    setIsEditing(false);
  };

  const handleCancel = () => {
    setDraft(movie.review); // throw away unsaved changes
    setIsEditing(false);
  };

  return (
    <article className="movie-card">
      <div className="movie-card__header">
        <h3 className="movie-card__title">{movie.title}</h3>
        <button
          className="movie-card__delete"
          onClick={() => onDelete(movie.id)}
          aria-label={`Remove ${movie.title}`}
          title="Remove movie"
        >
          🗑️
        </button>
      </div>

      <p className="movie-card__stars" aria-label={`${movie.rating} out of 5 stars`}>
        {stars} <span className="movie-card__score">({movie.rating}/5)</span>
      </p>

      <div className="movie-card__review">
        {isEditing ? (
          <>
            <textarea
              className="movie-card__textarea"
              rows="3"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="What did you think?"
              autoFocus
            />
            <div className="movie-card__actions">
              <button className="btn btn--primary" onClick={handleSave}>
                Save
              </button>
              <button className="btn btn--ghost" onClick={handleCancel}>
                Cancel
              </button>
            </div>
          </>
        ) : (
          <>
            {movie.review ? (
              <p className="movie-card__comment">💬 “{movie.review}”</p>
            ) : (
              <p className="movie-card__comment movie-card__comment--empty">
                No review yet.
              </p>
            )}
            <button className="btn btn--ghost" onClick={() => setIsEditing(true)}>
              {movie.review ? '✏️ Edit review' : '📝 Add review'}
            </button>
          </>
        )}
      </div>
    </article>
  );
}

export default MovieCard;
