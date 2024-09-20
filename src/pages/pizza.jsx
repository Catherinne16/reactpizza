import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Pizza.css';

const Pizza = () => {
  const { id } = useParams(); // Obtén el id de la URL
  const [pizza, setPizza] = useState(null);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/pizzas/p001`); // Usa el ID de la URL
        if (!response.ok) {
          throw new Error('Error al obtener la pizza');
        }
        const data = await response.json();
        setPizza(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchPizza();
  }, [id]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!pizza) {
    return <p>Cargando...</p>; 
  }

  return (
    <div className="pizza-container">
      <h1>{pizza.name}</h1>
      <img src={pizza.img} alt={pizza.name} />
      <p className="ingredients">Ingredientes: {pizza.ingredients.join(', ')}</p>
      <p>Precio: ${pizza.price}</p>
    </div>
  );
};

export default Pizza;
