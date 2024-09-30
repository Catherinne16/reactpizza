import React, { useContext } from 'react';
import { useCart } from '../context/CartContext';
import { useUser } from '../context/UserContext'; 
import './cartt.css'; 

const Cart = () => {
  const { cart, getTotal, clearCart } = useCart(); 
  const { token } = useUser();
  const total = getTotal();

  if (cart.length === 0) { 
    return <p>Carrito vacío!</p>;
  }

  const comprar = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/checkouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Usa el token del contexto
        },
        body: JSON.stringify(cart), // Solo envía el cart
      });

      if (response.ok) {
        alert("Compra realizada con éxito");
        clearCart(); // Limpia el carrito después de la compra
      } else {
        alert("Hubo un problema con la compra");
      }
    } catch (error) {
      console.error("Error en el proceso de compra:", error);
      alert("Error durante la compra");
    }
  };
  
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
              </div>
            </li>
          ))}
        </ul>
      )}
      <h3 className="cart-total">Total: ${total.toFixed(2)}</h3>
      {cart.length > 0 && ( 
        <button className="btn-pay" onClick={comprar} disabled={!token}>
          Pagar
        </button>
      )}
    </div>
  );
};

export default Cart;
