// src/components/Header.jsx
import React from 'react';
import './Header.css'; 

const Header = () => {
  return (
    <header className="header-container">
      <h1 className="header-title">Bienvenido a Pizzería Mamma Mia!</h1>
      <p className="header-subtitle">Las mejores pizzas de la ciudad, hechas con amor y los ingredientes más frescos.</p>
    </header>
  );
};

export default Header;
