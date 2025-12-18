import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h2 className="logo">My Book Library</h2>

        <nav className="nav">
          <Link to="/">Books</Link>
          <Link to="/basket">Basket</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
