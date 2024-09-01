// src/components/MiniCart.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import './mini-cart.css';

const MiniCart = ({ cart, updateCart, onClose }) => {
  const navigate = useNavigate(); // Inicializa useNavigate

  const handleIncrease = (id) => {
    updateCart(id, 1);
  };

  const handleDecrease = (id) => {
    updateCart(id, -1);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handlePayClick = () => {
    navigate('/cart'); // Redirige al usuario a la página del carrito
  };

  return (
    <div className="mini-cart">
      <button className="btn-close" onClick={onClose}></button>
      {cart.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.img} alt={item.name} className="cart-item-img" />
            <div className="cart-item-details">
              <h6>{item.name}</h6>
              <p className="ingredients-list">
                {item.ingredients.join(', ')}
              </p>
              <div className="quantity-controls">
                <button onClick={() => handleDecrease(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleIncrease(item.id)}>+</button>
              </div>
            </div>
          </div>
        ))
      )}
      <div className="cart-footer">
        <p>Total: ${calculateTotal()}</p>
        <button className="btn-pay" onClick={handlePayClick}>Ir a Pagar</button>
      </div>
    </div>
  );
};

export default MiniCart;
