import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <img src='src/assets/logo.webp' alt='Logo' />
      <ul>
        <li>
          <NavLink exact='true' to='/admin-users'>
            Usuarios
          </NavLink>
        </li>
        <li>
          <NavLink exact='true' to='/admin-products'>
            Productos
          </NavLink>
        </li>
        <li>
          <NavLink exact='true' to='/admin-orders'>
            Pedidos
          </NavLink>
        </li>
        <li>
          <NavLink exact='true' to='/'>
            Cerrar Sesión
            <i className='fa-solid fa-person-walking-arrow-right' />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
