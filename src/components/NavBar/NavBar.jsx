/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import UserContext from '../../../context/User/UserProvider';
import BurguerButton from '../BurguerButton/BurguerButton';
import './NavBar.scss';

function NavBar({ children }) {
  const [clicked, setClicked] = useState(false);

  const { cleanUser, user } = useContext(UserContext);

  const handleClick = () => {
    setClicked(!clicked);
  };

  if (clicked) {
    localStorage.setItem('navbar', 'true');
  } else {
    localStorage.setItem('navbar', 'false');
  }

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
        cleanUser();
        console.log(user.role);
      }
    });
  };

  return (
    <nav className='navbar'>
      <img src='src/assets/logo.webp' alt='Logo' className='navbar__logo' />
      <ul className={`navbar__options${clicked ? '--active' : ''}`}>
        {children}
        <li>
          <button
            type='button'
            className='navbar__item exit'
            onClick={closeSesion}
          >
            <i className='fa-solid fa-person-walking-arrow-right icon' />
            Cerrar Sesión
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
