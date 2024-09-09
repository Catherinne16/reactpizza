import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (pizza) => {
    setCart(prevCart => {
      const existingPizza = prevCart.find(p => p.id === pizza.id);
      if (existingPizza) {
        return prevCart.map(p =>
          p.id === pizza.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      } else {
        return [...prevCart, { ...pizza, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (pizzaId) => {
    setCart(prevCart => prevCart.filter(pizza => pizza.id !== pizzaId));
  };

  const updateQuantity = (pizzaId, amount) => {
    setCart(prevCart =>
      prevCart.map(pizza =>
        pizza.id === pizzaId ? { ...pizza, quantity: pizza.quantity + amount } : pizza
      ).filter(pizza => pizza.quantity > 0) // Elimina pizzas con cantidad 0
    );
  };

  const getTotal = () => {
    return cart.reduce((total, pizza) => total + (pizza.price || 0) * (pizza.quantity || 0), 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, getTotal }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
