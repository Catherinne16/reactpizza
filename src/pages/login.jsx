// src/components/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'; // Asegúrate de que esta ruta sea correcta

const Login = ({ registeredUser }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError('Todos los campos son obligatorios.');
            return;
        }
        if (registeredUser && registeredUser.email === email && registeredUser.password === password) {
            setError('');
            alert('¡Inicio de sesión exitoso!');
            navigate('/');
        } else {
            setError('Email o contraseña incorrectos.');
        }
    };

    return (
        
        <div className="page-content">
            <div className="login-container">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Email:</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label>Contraseña:</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    {error && <p className="error-message">{error}</p>}
                    <button type="submit">Iniciar Sesión</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
