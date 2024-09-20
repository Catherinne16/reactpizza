import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './CardPizza.css';

const CardPizza = ({ name, price, ingredients, img, addToCart }) => {
  const handleAddToCart = () => {
    addToCart(1); // Agrega una pizza al carrito
    alert(`¡${name} ha sido agregada al carrito!`); // Alerta al agregar
  };

  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">Ingredientes</h6>
        <ul className="list-unstyled">
          {ingredients.map((ingredient, index) => (
            <li key={index} className="ingredient-item">
              <span role="img" aria-label="pizza slice">🍕</span> {ingredient}
            </li>
          ))}
        </ul>
        <div className="d-flex justify-content-between align-items-center">
          <p className="card-text mb-0">Precio: ${price}</p>
          <div>
            <button className="btn-add-to-cart" onClick={handleAddToCart}>
              🛒 Añadir
            </button>
            <Link to={`/pizza/${name}`} className="btn btn-details">
              Detalles
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

CardPizza.propTypes = {
  id: PropTypes.string.isRequired, // Agregar prop para el id
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  img: PropTypes.string.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default CardPizza;