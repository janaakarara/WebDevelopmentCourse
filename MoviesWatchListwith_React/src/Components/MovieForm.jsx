import { useState } from "react";

export default function MovieForm({ onAddMovie }) {
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(5);

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim()) return;

    onAddMovie({
      id: Date.now(),
      title: title.trim(),
      comment: comment.trim(),
      rating: Number(rating),
    });

    setTitle("");
    setComment("");
    setRating(5);
  }

  return (
    <form className="movie-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Movie title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Review comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        rows="2"
      />
      <div className="form-actions">
        <label>
          Rating:{" "}
          <select value={rating} onChange={(e) => setRating(e.target.value)}>
            <option value="1">1 Star</option>
            <option value="2">2 Stars</option>
            <option value="3">3 Stars</option>
            <option value="4">4 Stars</option>
            <option value="5">5 Stars</option>
          </select>
        </label>
        <button type="submit" className="btn-primary">
          Add Movie
        </button>
      </div>
    </form>
  );
}