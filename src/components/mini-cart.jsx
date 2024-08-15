import React from 'react';
import './mini-cart.css';

const MiniCart = ({ cart, updateCart, onClose }) => {
  const total = cart.reduce((sum, pizza) => sum + pizza.price * pizza.quantity, 0);

  return (
    <div className="mini-cart">
      <button className="btn-close" onClick={onClose}></button>
      <h4>Carrito</h4>
      <ul className="list-unstyled">
        {cart.map((pizza) => (
          <li key={pizza.id} className="cart-item">
            <img src={pizza.img} alt={pizza.name} className="cart-item-img" />
            <div className="cart-item-details">
              <h5>{pizza.name}</h5>
              <ul className="ingredients-list">
                {pizza.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
              <p>Precio: ${pizza.price}</p>
              <p>Cantidad: {pizza.quantity}</p>
              <div className="quantity-controls">
                <button onClick={() => updateCart(pizza.id, 1)} className="quantity-btn">+</button>
                <button onClick={() => updateCart(pizza.id, -1)} className="quantity-btn">-</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="cart-footer">
        <h5>Total: ${total}</h5>
        <button className="btn btn-dark-green">Pagar</button>
      </div>
    </div>
  );
};

export default MiniCart;
