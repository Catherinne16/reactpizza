import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ toggleCart }) => {
  const token = false; // Esto debería venir del estado global o contexto

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <Link className="navbar-brand" to="/">Pizzería Mamma Mia!</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
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
              <button className="btn btn-outline-light" onClick={toggleCart}>🛒</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
