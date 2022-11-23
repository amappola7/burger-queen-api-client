import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.scss';

function NavBar() {
  return (
    <nav className='navbar'>
      <img src='src/assets/logo.webp' alt='Logo' className='navbar__logo' />
      <ul className='navbar__options'>
        <li>
          <NavLink exact='true' to='/admin-users' className='navbar__item'>
            Usuarios
          </NavLink>
        </li>
        <li>
          <NavLink exact='true' to='/admin-products' className='navbar__item'>
            Productos
          </NavLink>
        </li>
        <li>
          <NavLink exact='true' to='/admin-orders' className='navbar__item'>
            Pedidos
          </NavLink>
        </li>
        <li>
          <NavLink exact='true' to='/' className='navbar__item'>
            Cerrar Sesión
            <i className='fa-solid fa-person-walking-arrow-right icon' />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
