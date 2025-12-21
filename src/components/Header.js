import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context';
import { useTheme } from '../context/ThemeContext';
import './Header.css';

function Header() {
  const { user, logout } = useContext(AuthContext);
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="header">
      <div className="header-content">
        <h2 className="logo">📚 Book Store</h2>

        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/books">Books</Link>
          <Link to="/basket">Basket</Link>
          <Link to="/orders">Orders</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>

          <button className="theme-toggle" onClick={toggleTheme}>
            {isDark ? '☀️ Light' : '🌙 Dark'}
          </button>

          {!user ? (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          ) : (
            <>
              <span className="user">👤 {user.fullName}</span>
              <button className="logout-btn" onClick={logout}>
                Logout
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
