/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
import React, { useContext, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import UserContext from '../../../context/User/UserProvider';
import NavBar from '../../components/NavBar/NavBar';
import { ordersListRequest } from '../../API/ordersRequestHTTP';
import ProductOrder from '../../components/ItemTable/ItemOrders/productOrder/ProductOrder';
import ItemOrders from '../../components/ItemTable/ItemOrders/ItemOrders';
import './OrdersStatus.scss';

function OrdersStatus() {
  const { user, navBarContext } = useContext(UserContext);
  const [valueSelect, setValueSelect] = useState('pending');
  const [orders, setOrders] = useState([]);

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

  useEffect(() => {
    ordersListRequest(user.token)
      .then((response) => {
        setOrders(response.data);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error('ERROR AL TRAER LA LISTA DE PRODUCTOS', error);
      });
  }, [user, orders]);

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
        <select
          name=''
          id=''
          onChange={(ev) => handleSelect(ev)}
          className='orders-status__select-status'
        >
          <option value='pending'>--Estado de la Órden--</option>
          <option value='pending'>Pendientes</option>
          <option value='finished'>Terminadas</option>
          <option value='delivered'>Entregadas</option>
        </select>
        <table
          className={
            valueSelect === 'pending'
              ? 'orders-status__pending-orders--active'
              : 'orders-status__pending-orders'
          }
        >
          <thead>
            <tr>
              <th>Pendientes</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => {
              if (order.status === 'pending') {
                return (
                  <ItemOrders
                    key={order.id}
                    id={order.id}
                    clientName={order.client}
                    orderDate={order.dataEntry}
                    orderStatus={order.status}
                    user={user}
                  >
                    {order.products.map((product) => {
                      if (product.qty > 0) {
                        return (
                          <ProductOrder
                            key={product.product.id}
                            productOrderName={product.product.name}
                            productOrderQuantity={product.qty}
                          />
                        );
                      }
                    })}
                  </ItemOrders>
                );
              }
            })}
          </tbody>
        </table>
        <table
          className={
            valueSelect === 'finished'
              ? 'orders-status__finished-orders--active'
              : 'orders-status__finished-orders'
          }
        >
          <thead>
            <tr>
              <th>Terminadas</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => {
              if (order.status === 'finished') {
                return (
                  <ItemOrders
                    key={order.id}
                    id={order.id}
                    clientName={order.client}
                    orderDate={order.dataEntry}
                    orderStatus={order.status}
                    user={user}
                  >
                    {order.products.map((product) => {
                      if (product.qty > 0) {
                        return (
                          <ProductOrder
                            key={product.product.id}
                            productOrderName={product.product.name}
                            productOrderQuantity={product.qty}
                          />
                        );
                      }
                    })}
                  </ItemOrders>
                );
              }
            })}
          </tbody>
        </table>
        <table
          className={
            valueSelect === 'delivered'
              ? 'orders-status__delivered-orders--active'
              : 'orders-status__delivered-orders'
          }
        >
          <thead>
            <tr>
              <th>Entregadas</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => {
              if (order.status === 'delivered') {
                return (
                  <ItemOrders
                    key={order.id}
                    id={order.id}
                    clientName={order.client}
                    orderDate={order.dataEntry}
                    orderStatus={order.status}
                    user={user}
                  >
                    {order.products.map((product) => {
                      if (product.qty > 0) {
                        return (
                          <ProductOrder
                            key={product.product.id}
                            productOrderName={product.product.name}
                            productOrderQuantity={product.qty}
                          />
                        );
                      }
                    })}
                  </ItemOrders>
                );
              }
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default OrdersStatus;
