// src/context/PizzaContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';

const PizzaContext = createContext();

export const PizzaProvider = ({ children }) => {
  const [pizzas2, setPizzas2] = useState([]);

useEffect(() => {
   fetch('/api/pizzas')
    .then(response => response.json())
    .then(data => setPizzas2(data))
      .catch(error => console.error('Error fetching pizzas:', error));
}, []);

  return (
    <PizzaContext.Provider value={{ pizzas2, setPizzas2 }}>
      {children}
    </PizzaContext.Provider>
  );
};

export const usePizzas = () => useContext(PizzaContext);
