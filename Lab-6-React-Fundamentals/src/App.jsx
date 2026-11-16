import { Routes, Route, Link } from "react-router";
import HomePage from "./pages/HomePage.jsx";
import CheckoutPage from "./pages/CheckoutPage.jsx";
import NavBar from "./components/NavBar.jsx";
import "./App.css";

function NotFound() {
  return (
    <>
      <NavBar />
      <main className="page not-found">
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <Link to="/" className="btn">
          Back to Home
        </Link>
      </main>
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
