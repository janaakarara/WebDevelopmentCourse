import { useState } from 'react';
import MovieForm from './components/MovieForm.jsx';
import MovieList from './components/MovieList.jsx';
import './App.css';

function App() {
  // Single source of truth: the whole watch list lives here ("lifted state").
  const [movies, setMovies] = useState([
    { id: 1, title: 'Inception', rating: 5, review: 'Mind-bending masterpiece!' },
    { id: 2, title: 'The Matrix', rating: 4, review: '' },
  ]);

  // CREATE: called by <MovieForm /> through the onAddMovie prop
  const addMovie = (title, rating, review) => {
    const newMovie = {
      id: Date.now(), // simple unique id
      title,
      rating,
      review,
    };
    // Never mutate state – build a NEW array with spread syntax
    setMovies([...movies, newMovie]);
  };

  // DELETE: keep every movie whose id is NOT the one clicked
  const deleteMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  // UPDATE: replace only the matching movie's review
  const updateReview = (id, newReview) => {
    setMovies(
      movies.map((movie) =>
        movie.id === id ? { ...movie, review: newReview } : movie
      )
    );
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>🎬 Movies Watch List</h1>
        <p className="app-subtitle">
          {movies.length} {movies.length === 1 ? 'movie' : 'movies'} to watch
        </p>
      </header>

      <main className="app-main">
        <MovieForm onAddMovie={addMovie} />
        <MovieList
          movies={movies}
          onDeleteMovie={deleteMovie}
          onUpdateReview={updateReview}
        />
      </main>
    </div>
  );
}

export default App;
