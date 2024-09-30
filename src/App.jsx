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
import { UserProvider } from './context/UserContext';
import { useUser } from './context/UserContext';
import ProtectedRoute from './components/ProtectedRoute';
import PizzaContainer from './components/PizzaContainer';
import RegisterWithCustomHooks from './pages/RegisterWithCustomHooks';
import './index.css';

const App = () => {
  const { token } = useUser();
  const [isCartVisible, setIsCartVisible] = useState(false);

  const toggleCart = () => {
    setIsCartVisible(prev => !prev); // Mejorar la lectura al usar el valor previo
  };

  function App() {
    return (
        <div>
            {/* Otras rutas o componentes */}
            <RegisterWithCustomHooks />
        </div>
    );
}

  return (
    <Router>
      <UserProvider>
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
                <Route path="/pizza/:id" element={<Pizza />} /> {/* Simplificado para manejar IDs dinámicos */}
                <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
                <Route path="/404" element={<NotFound />} />
                <Route path="*" element={<Navigate to="/404" />} />
              </Routes>
              <Footer />
              <div className={`mini-cart-wrapper ${isCartVisible ? 'open' : ''}`}>
                <MiniCart onClose={toggleCart} />
              </div>
            </div>
          </CartProvider>
        </PizzaProvider>
      </UserProvider>
    </Router>
  );
};

export default App;