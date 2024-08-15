// Cart.jsx
import React from 'react';

const Cart = ({ cart, updateCart }) => {
  const total = cart.reduce((acc, pizza) => acc + pizza.price * pizza.quantity, 0);

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <ul>
          {cart.map((pizza) => (
            <li key={pizza.id} className="cart-item">
              <img src={pizza.img} alt={pizza.name} style={{ width: '50px' }} />
              <span>{pizza.name}</span>
              <span>Cantidad: {pizza.quantity}</span>
              <span>Precio: ${pizza.price}</span>
              <div>
                <button onClick={() => updateCart(pizza.id, -1)}>-</button>
                <button onClick={() => updateCart(pizza.id, 1)}>+</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${total}</h3>
      {cart.length > 0 && <button>Pagar</button>}
    </div>
  );
};

export default Cart;
