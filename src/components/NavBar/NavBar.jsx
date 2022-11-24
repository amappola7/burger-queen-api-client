import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import BurguerButton from '../BurguerButton/BurguerButton';
import './NavBar.scss';

function NavBar() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav className='navbar'>
      <img src='src/assets/logo.webp' alt='Logo' className='navbar__logo' />
      <ul className={`navbar__options${clicked ? '--active' : ''}`}>
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
          <NavLink exact='true' to='/' className='navbar__item exit'>
            Cerrar Sesión
            <i className='fa-solid fa-person-walking-arrow-right icon' />
          </NavLink>
        </li>
      </ul>
      <div className='burguer-icon'>
        <BurguerButton clicked={clicked} handleClick={handleClick} />
      </div>
    </nav>
  );
}

export default NavBar;
