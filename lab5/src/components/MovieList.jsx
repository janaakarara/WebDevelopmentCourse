import MovieCard from './MovieCard.jsx';
import './MovieList.css';

// Props: movies (array), onDeleteMovie(id), onUpdateReview(id, text)
function MovieList({ movies, onDeleteMovie, onUpdateReview }) {
  if (movies.length === 0) {
    return (
      <p className="movie-list__empty">
        🍿 Your watch list is empty. Add your first movie above!
      </p>
    );
  }

  return (
    <section className="movie-list">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id} // key helps React track each item efficiently
          movie={movie}
          onDelete={onDeleteMovie}
          onUpdateReview={onUpdateReview}
        />
      ))}
    </section>
  );
}

export default MovieList;
