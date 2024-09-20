import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Register from './pages/register';
import Login from './pages/login';
import Cart from './pages/Cart';
import Pizza from './pages/pizza';
import Profile from './pages/profile';
import NotFound from './components/Nfound';
import MiniCart from './components/mini-cart';
import { PizzaProvider } from './context/PizzaContext';
import { CartProvider } from './context/CartContext';
import { useUser } from './context/UserContext';
import ProtectedRoute from './components/ProtectedRoute';
import PizzaContainer from './components/PizzaContainer';
import './index.css';

const App = () => {
  const { token } = useUser();
  const [isCartVisible, setIsCartVisible] = useState(false);

  const toggleCart = () => {
    setIsCartVisible(!isCartVisible);
  };

  return (
    <Router>
      <PizzaProvider>
        <CartProvider>
          <div>
            <Navbar toggleCart={toggleCart} />
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={token ? <Navigate to="/" /> : <Register />} />
              <Route path="/login" element={token ? <Navigate to="/" /> : <Login />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/pizza/p001" element={<Pizza />} />
              <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
              <Route path="/404" element={<NotFound />} />
              <Route path="*" element={<Navigate to="/404" />} />
              <Route path="/pizza/:id" element={<Pizza />} /> {/* Ruta para los detalles de la pizza */}
            </Routes>
            <Footer />
            <div className={`mini-cart-wrapper ${isCartVisible ? 'open' : ''}`}>
              <MiniCart onClose={toggleCart} />
            </div>
          </div>
        </CartProvider>
      </PizzaProvider>
    </Router>
  );
};

export default App;
