export default function MovieItem({ movie, onDelete }) {
  const starEmojis = "⭐".repeat(movie.rating);

  return (
    <div className="movie-card">
      <div className="card-top">
        <h3>{movie.title}</h3>
        <button className="btn-delete" onClick={() => onDelete(movie.id)}>
          Delete
        </button>
      </div>
      <p className="stars">{starEmojis} ({movie.rating}/5)</p>
      {movie.comment && <p className="review-text">"{movie.comment}"</p>}
    </div>
  );
}