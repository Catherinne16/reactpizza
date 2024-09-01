// src/components/Pizza.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Pizza.css'; 

const Pizza = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/pizzas/p001`)
      .then(response => response.json())
      .then(data => setPizza(data))
      .catch(error => console.error('Error fetching pizza:', error));
  }, [id]);

  if (!pizza) return <p>Cargando...</p>;

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
