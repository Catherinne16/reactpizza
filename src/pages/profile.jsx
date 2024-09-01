import React from 'react';
import './Profile.css'; 

const Profile = () => {
  return (
    <div className="profile-container">
      <h1 className="profile-title">Perfil de Usuario</h1>
      <p className="profile-email">Email: pizzapizza@mamamia.cl</p>
      <button className="profile-button" onClick={() => alert('Cerrando sesión...')}>Cerrar sesión</button>
    </div>
  );
};

export default Profile;
