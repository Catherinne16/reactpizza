import React from 'react';
import { useCart } from '../context/CartContext';
import { useUser } from '../context/UserContext'; 
import './cartt.css'; 

const Cart = () => {
  const { cart, getTotal } = useCart(); // Asegúrate de usar el nombre correcto aquí
  const { token } = useUser();
  const total = getTotal();

  if (cart.length === 0) { // Verifica si el carrito está vacío
    return <p>Carrito vacío!</p>;
  }
  
  return (
    <div className="cart-wrapper">
      <h2 className="cart-header">Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <ul className="cart-list">
          {cart.map((pizza) => ( // Asegúrate de usar cart aquí
            <li key={pizza.id} className="cart-item">
              <img src={pizza.img} alt={pizza.name} className="cart-item-img" />
              <div className="cart-item-details">
                <span className="cart-item-name">{pizza.name}</span>
                <span className="cart-item-quantity">Cantidad: {pizza.quantity}</span>
                <span className="cart-item-price">Precio: ${pizza.price}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
      <h3 className="cart-total">Total: ${total.toFixed(2)}</h3>
      {cart.length > 0 && ( // Usa cart aquí también
        <button className="btn-pay" disabled={!token}>
          Pagar
        </button>
      )}
    </div>
  );
};

export default Cart;
