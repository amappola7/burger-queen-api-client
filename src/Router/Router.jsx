import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AdminIndex from '../Pages/AdminIndex/AdminIndex';
import AdminProducts from '../Pages/AdminProducts/AdminProducts';
import AdminUser from '../Pages/AdminUsers/AdminUser';
import Login from '../Pages/Login/Login';
import TakeOrders from '../Pages/TakeOrders/TakeOrders';
import OrdersStatus from '../Pages/OrdersStatus/OrdersStatus';
import UserContext from '../../context/User/UserProvider';

function Router() {
  let userRole;
  if (JSON.parse(localStorage.getItem('userInfo')) !== null) {
    userRole = JSON.parse(localStorage.getItem('userInfo')).role;
  }
  // const userRole =
  //   JSON.parse(localStorage.getItem('userInfo')) === null
  //     ? ''
  //     : JSON.parse(localStorage.getItem('userInfo')).role;
  console.log(userRole);

  const defaultRoutes = (role) => {
    let route;
    switch (role) {
      case 'admin':
        route = '/admin-index';
        break;
      case 'chef':
        route = '/orders-status';
        break;
      case 'waiter':
        route = '/take-orders';
        break;
      default:
        route = '/';
        break;
    }

    return route;
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route
            path='/admin-users'
            element={
              userRole === 'admin' ? (
                <AdminUser />
              ) : (
                <Navigate to={defaultRoutes(userRole)} />
              )
            }
          />
          <Route
            path='/admin-index'
            element={
              userRole === 'admin' ? (
                <AdminIndex />
              ) : (
                <Navigate to={defaultRoutes(userRole)} />
              )
            }
          />
          <Route
            path='/admin-products'
            element={
              userRole === 'admin' ? (
                <AdminProducts />
              ) : (
                <Navigate to={defaultRoutes(userRole)} />
              )
            }
          />
          <Route
            path='/take-orders'
            element={
              userRole === 'waiter' ? (
                <TakeOrders />
              ) : (
                <Navigate to={defaultRoutes(userRole)} />
              )
            }
          />
          <Route path='/orders-status' element={<OrdersStatus />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
