import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const total = 25000;
  const token = false; // Esto debería venir del estado global o contexto

  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: 'red' }}>
      <a className="navbar-brand" href="#">Pizzería Mamma Mia!</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">🍕 Home</Link>
          </li>
          {token ? (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/profile">🔓 Profile</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/logout">🔒 Logout</Link>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/login">🔐 Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">🔐 Register</Link>
              </li>
            </>
          )}
          <li className="nav-item">
            <span className="nav-link">🛒 Total: ${total}</span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
