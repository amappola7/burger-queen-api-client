import React from 'react';
import { NavLink } from 'react-router-dom';

function AdminIndex({ username }) {
  return (
    <section>
      <div>
        <img src='src/assets/logo.webp' alt='Logo' className='logo' />
        <p>
          {username}
          <i className='fa-solid fa-user' />
        </p>
      </div>
      <div>
        <img src='src/assets/icons/users.png' alt='Icono Usuarios' />
        <NavLink exact to='/admin-users'>
          Usuarios
        </NavLink>
        <img src='src/assets/icons/products.png' alt='Icono Productos' />
        <NavLink exact to='/admin-products'>
          Productos
        </NavLink>
        <img src='src/assets/icons/orders.png' alt='Icono Pedidos' />
        <NavLink exact to='/admin-orders'>
          Pedidos
        </NavLink>
      </div>
    </section>
  );
}

export default AdminIndex;
