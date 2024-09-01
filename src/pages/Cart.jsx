// Cart.jsx
import React from 'react';
import './cartt.css';

const Cart = ({ cart, updateCart }) => {
  const total = cart.reduce((acc, pizza) => acc + pizza.price * pizza.quantity, 0);

  return (
    <div className="cart-wrapper">
      <h2 className="cart-header">Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <ul className="cart-list">
          {cart.map((pizza) => (
            <li key={pizza.id} className="cart-item">
              <img src={pizza.img} alt={pizza.name} className="cart-item-img" />
              <div className="cart-item-details">
                <span className="cart-item-name">{pizza.name}</span>
                <span className="cart-item-quantity">Cantidad: {pizza.quantity}</span>
                <span className="cart-item-price">Precio: ${pizza.price}</span>
                <div className="quantity-controls">
                  <button className="btn-adjust" onClick={() => updateCart(pizza.id, -1)}>-</button>
                  <button className="btn-adjust" onClick={() => updateCart(pizza.id, 1)}>+</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
      <h3 className="cart-total">Total: ${total}</h3>
      {cart.length > 0 && <button className="btn-pay">Pagar</button>}
    </div>
  );
};

export default Cart;
