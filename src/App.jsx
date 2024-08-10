import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Register from './pages/register';
import Login from './pages/login';
import './index.css';

const App = () => {
  const [registeredUser, setRegisteredUser] = useState(null);

  const handleRegister = (user) => {
    setRegisteredUser(user);
  };

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register onRegister={handleRegister} />} />
          <Route path="/login" element={<Login registeredUser={registeredUser} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
