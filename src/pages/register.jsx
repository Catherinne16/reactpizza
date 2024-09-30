import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { useUser } from '../context/UserContext'; 
import './register.css'; 

const Register = () => {
    const { register } = useUser();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        await register(email, password);
    };
    
    return (
        <div className="register-container">
            <h2>Registrarse</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Registrar</button>
            </form>
        </div>
    );
};

export default Register;