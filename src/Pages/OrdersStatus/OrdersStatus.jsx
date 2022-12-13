import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import UserContext from '../../../context/User/UserProvider';
import NavBar from '../../components/NavBar/NavBar';
import './OrdersStatus.scss';

function OrdersStatus() {
  const { user, navBarContext } = useContext(UserContext);

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
  return (
    <section className='orders-status'>{navBarOptions(user.role)}</section>
  );
}

export default OrdersStatus;
