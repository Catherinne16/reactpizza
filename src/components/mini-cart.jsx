import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext'; 
import './mini-cart.css';

const MiniCart = ({ onClose }) => {
  const navigate = useNavigate();
  const { cart, updateQuantity, getTotal } = useCart(); 

  const handleIncrease = (id) => {
    updateQuantity(id, 1);
  };

  const handleDecrease = (id) => {
    updateQuantity(id, -1);
  };

  const handlePayClick = () => {
    navigate('/cart');
  };

  return (
    <div className="mini-cart">
      <button className="btn-close" onClick={onClose}></button>
      {cart.length === 0 ? (
        <p>Carrito Vacio!</p>
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
        <p>Total: ${getTotal()}</p>
        <button className="btn-pay" onClick={handlePayClick}>Ir a Pagar</button>
      </div>
    </div>
  );
};

export default MiniCart;
