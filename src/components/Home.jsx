import React, { useEffect, useState } from 'react';
import { usePizzas } from '../context/PizzaContext';
import { useCart } from '../context/CartContext';
import CardPizza from './CardPizza';
import '../components/home.css';

const Home = () => {
  const { pizzas2, setPizzas2 } = usePizzas(); 
  const { addToCart } = useCart();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/pizzas');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPizzas2(data); 
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPizzas();
  }, [setPizzas2]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mt-4">
      <div className="row">
        {pizzas2.length > 0 ? (
          pizzas2.map(pizza => (
            <div className="col-md-4 mb-4" key={pizza.id}>
              <CardPizza
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                img={pizza.img}
                addToCart={() => addToCart(pizza)}
              />
            </div>
          ))
        ) : (
          <p>No hay pizzas disponibles.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
