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
      <div className='admin-index__menu'>
        <div className='admin-index__category'>
          <i className='fa-solid fa-users' />
          <NavLink className='generic-button' exact='true' to='/admin-users'>
            Usuarios
          </NavLink>
        </div>

        <div className='admin-index__category'>
        <i className='fa-solid fa-burger' />
          <NavLink className='generic-button' exact='true' to='/admin-products'>
            Productos
          </NavLink>
        </div>

        <div className='admin-index__category'>
          <i className='fa-solid fa-basket-shopping' />
          <NavLink className='generic-button' exact='true' to='/admin-orders'>
            Pedidos
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default AdminIndex;
