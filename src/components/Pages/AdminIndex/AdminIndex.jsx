/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink } from 'react-router-dom';
import './AdminIndex.scss';

function AdminIndex({ username }) {
  return (
    <section className='admin-index'>
      <div className='admin-index__header'>
        <img src='src/assets/logo.webp' alt='Logo' className='logo' />
        <p>
          {username}
          <i className='fa-solid fa-user' />
        </p>
      </div>
      <div>
        <img src='src/assets/icons/users.png' alt='Icono Usuarios' />
        <NavLink className='generic-button' exact='true' to='/admin-users'>
          Usuarios
        </NavLink>
        <img src='src/assets/icons/products.png' alt='Icono Productos' />
        <NavLink className='generic-button' exact='true' to='/admin-products'>
          Productos
        </NavLink>
        <img src='src/assets/icons/orders.png' alt='Icono Pedidos' />
        <NavLink className='generic-button' exact='true' to='/admin-orders'>
          Pedidos
        </NavLink>
      </div>
    </section>
  );
}

export default AdminIndex;
