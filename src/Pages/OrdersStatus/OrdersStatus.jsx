import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import UserContext from '../../../context/User/UserProvider';
import NavBar from '../../components/NavBar/NavBar';
import './OrdersStatus.scss';

function OrdersStatus() {
  const { user, navBarContext } = useContext(UserContext);
  const [valueSelect, setValueSelect] = useState('pending');

  const navBarOptions = (role) => {
    let component;
    switch (role) {
      case 'admin':
        component = (
          <NavBar>
            <li>
              <NavLink exact='true' to='/admin-users' className='navbar__item'>
                <i className='fa-solid fa-users' />
                Usuarios
              </NavLink>
            </li>
            <li>
              <NavLink
                exact='true'
                to='/admin-products'
                className='navbar__item'
              >
                <i className='fa-solid fa-burger' />
                Productos
              </NavLink>
            </li>
            <li>
              <NavLink
                exact='true'
                to='/orders-status'
                className='navbar__item'
              >
                <i className='fa-solid fa-basket-shopping' />
                Pedidos
              </NavLink>
            </li>
          </NavBar>
        );
        break;
      case 'chef':
        component = (
          <NavBar>
            <li>
              <NavLink
                exact='true'
                to='/orders-status'
                className='navbar__item'
              >
                <i className='fa-solid fa-basket-shopping' />
                Pedidos
              </NavLink>
            </li>
          </NavBar>
        );
        break;
      case 'waiter':
        component = (
          <NavBar>
            <li>
              <NavLink exact='true' to='/take-orders' className='navbar__item'>
                <i className='fa-solid fa-clipboard-list' />
                Tomar Orden
              </NavLink>
            </li>
            <li>
              <NavLink
                exact='true'
                to='/orders-status'
                className='navbar__item'
              >
                <i className='fa-solid fa-basket-shopping' />
                Pedidos
              </NavLink>
            </li>
          </NavBar>
        );
        break;
      default:
        component = false;
        break;
    }

    return component;
  };

  const handleSelect = (ev) => {
    setValueSelect(ev.target.value);
  };

  return (
    <section className='orders-status'>
      {navBarOptions(user.role)}
      <div
        className={
          navBarContext === true
            ? 'orders-status__container--closed'
            : 'orders-status__container'
        }
      >
        <select name='' id='' onChange={(ev) => handleSelect(ev)}>
          <option value='pending'>--Estado de la Órden--</option>
          <option value='pending'>Pendientes</option>
          <option value='finished'>Terminadas</option>
          <option value='delivered'>Entregadas</option>
        </select>
        <table className='orders-status__pending-orders'>
          <thead>
            <tr>
              <th>Pendientes</th>
            </tr>
          </thead>
          <tbody>Cuerpo de la tabla</tbody>
        </table>
        <table className='orders-status__finished-orders'>
          <thead>
            <tr>
              <th>Terminadas</th>
            </tr>
          </thead>
          <tbody>Cuerpo de la tabla</tbody>
        </table>
        <table className='orders-status__delivered-orders'>
          <thead>
            <tr>
              <th>Entregadas</th>
            </tr>
          </thead>
          <tbody>Cuerpo de la tabla</tbody>
        </table>
      </div>
    </section>
  );
}

export default OrdersStatus;
