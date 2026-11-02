import { useState } from "react";
import MovieForm from "./Components/MovieForm";
import MovieItem from "./Components/MovieItem";
import "./App.css";

export default function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Interstellar",
      comment: "Outstanding sound and visuals.",
      rating: 5,
    },
  ]);

  function handleAddMovie(newMovie) {
    setMovies([newMovie, ...movies]);
  }

  function handleDeleteMovie(id) {
    setMovies(movies.filter((movie) => movie.id !== id));
  }

  return (
    <div className="app-container">
      <div className="header">
        <h1>🎬 Movies Watch List</h1>
      </div>

      <MovieForm onAddMovie={handleAddMovie} />

      <div className="movie-list">
        {movies.length === 0 ? (
          <p style={{ textAlign: "center", color: "#6b7280" }}>
            No movies recorded yet.
          </p>
        ) : (
          movies.map((movie) => (
            <MovieItem
              key={movie.id}
              movie={movie}
              onDelete={handleDeleteMovie}
            />
          ))
        )}
      </div>
    </div>
  );
}