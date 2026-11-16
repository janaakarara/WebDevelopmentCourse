import { Link } from "react-router";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        CSE 343 Lab 6
      </Link>
      <ul className="navbar-links">
        <li>
          <Link to="/" className="navbar-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/checkout" className="navbar-link">
            Checkout
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
