import React from 'react';
import { NavLink } from 'react-router-dom'; 

function NotFound() {
  return (
    <div className="notfound">
        <p className="text-404">404</p>
        <p>Oups! La page que vous demandez n'existe pas.</p>
         <NavLink to="/">
         <p className="nav-link">Retourner sur la page d’accueil</p>
         </NavLink>
    </div>
  )
}

export default NotFound