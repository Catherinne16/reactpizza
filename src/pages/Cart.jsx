import React from 'react';
import { useCart } from '../context/CartContext';
import './cartt.css';

const Cart = () => {
  const { cart, removeFromCart, getTotal, updateQuantity } = useCart(); // Usar contexto

  // Usar getTotal para calcular el total
  const total = getTotal();

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
                  <button className="btn-adjust" onClick={() => updateQuantity(pizza.id, -1)}>-</button>
                  <button className="btn-adjust" onClick={() => updateQuantity(pizza.id, 1)}>+</button>
                  <button className="btn-remove" onClick={() => removeFromCart(pizza.id)}>Eliminar</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
      <h3 className="cart-total">Total: ${total.toFixed(2)}</h3>
      {cart.length > 0 && <button className="btn-pay">Pagar</button>}
    </div>
  );
};

export default Cart;
