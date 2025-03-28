import React from 'react';
import { NavLink } from 'react-router-dom'; 

const Navigation = () => {
  return (
    <div className='navigation'>
      <img src="/src/assets/img/logo-kasa.png" alt="Logo du site KASA" />
      <ul>
        <NavLink to="/" className="nav-link">
          <li>Accueil</li>
        </NavLink>
        <NavLink to="/about" className="nav-link">
          <li>À propos</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;