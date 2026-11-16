import { useState, useEffect } from "react";
import NavBar from "../components/NavBar.jsx";
import "./HomePage.css";

function HomePage() {
  // useState: item counter
  const [count, setCount] = useState(0);

  // useState: controlled text input
  const [name, setName] = useState("");

  // useState: boolean light toggle
  const [isOn, setIsOn] = useState(false);

  // useState: fetched data
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  // useEffect: fetch data ONCE on mount (empty dependency array)
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setUser(data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <>
      <NavBar />
      <main className="page home-page">
        <h1>Home Page</h1>
        <p className="subtitle">React Hooks demo: useState &amp; useEffect</p>

        <section className="card">
          <h2>Item Counter (useState)</h2>
          <p className="count">Items: {count}</p>
          <div className="button-group">
            <button className="btn" onClick={() => setCount(count + 1)}>
              Add Item
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => setCount(0)}
            >
              Reset
            </button>
          </div>
        </section>

        <section className="card">
          <h2>Controlled Input (useState)</h2>
          <input
            type="text"
            className="text-input"
            placeholder="Type your name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <p>Hello, {name || "stranger"}!</p>
        </section>

        <section className={`card light-card ${isOn ? "light-on" : ""}`}>
          <h2>Light Toggle (useState)</h2>
          <p>The light is {isOn ? "ON 💡" : "OFF 🌑"}</p>
          <button className="btn" onClick={() => setIsOn(!isOn)}>
            Turn {isOn ? "Off" : "On"}
          </button>
        </section>

        <section className="card">
          <h2>Fetched User (useEffect)</h2>
          {error ? (
            <p className="error">Error: {error}</p>
          ) : user ? (
            <p className="user-name">
              User name: <strong>{user.name}</strong>
            </p>
          ) : (
            <p className="loading">Loading...</p>
          )}
        </section>
      </main>
    </>
  );
}

export default HomePage;
