import React, { useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { NavLink } from 'react-router-dom';
import BurguerButton from '../BurguerButton/BurguerButton';
import './NavBar.scss';

function NavBar() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const closeSesion = () => {
    const MySwal = withReactContent(Swal);

    MySwal.fire({
      title: '¿Estás seguro que deseas cerrar sesión?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#ff7272',
      cancelButtonColor: '#8c8787',
      confirmButtonText: '¡Si, cerrar sesión!',
      cancelButtonText: 'Cancelar',
      customClass: {
        popup: 'delete-user-alert',
      },
    }).then((result) => {
      if (result.isConfirmed) {
        //
      }
    });
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
          <button
            type='button'
            className='navbar__item exit'
            onClick={closeSesion}
          >
            Cerrar Sesión
            <i className='fa-solid fa-person-walking-arrow-right icon' />
          </button>
        </li>
      </ul>
      <div className='burguer-icon'>
        <BurguerButton clicked={clicked} handleClick={handleClick} />
      </div>
    </nav>
  );
}

export default NavBar;

// Borrar este  comentario
