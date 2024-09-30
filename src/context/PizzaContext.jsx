import React, { useEffect, useState, createContext, useContext } from 'react';

const PizzaContext = createContext();

export const PizzaProvider = ({ children }) => {
  const [pizzas2, setPizzas2] = useState([]);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/pizzas');
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        setPizzas2(data);
      } catch (error) {
        console.error('Error fetching pizzas:', error);
      }
    };
  
    fetchPizzas();
  }, []);
  
  return (
    <PizzaContext.Provider value={{ pizzas2, setPizzas2 }}>
      {children}
    </PizzaContext.Provider>
  );
};

export const usePizzas = () => useContext(PizzaContext);
