import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminIndex from '../Pages/AdminIndex/AdminIndex';
import AdminProducts from '../Pages/AdminProducts/AdminProducts';
import AdminUser from '../Pages/AdminUsers/AdminUser';
import Login from '../Pages/Login/Login';
import TakeOrders from '../Pages/TakeOrders/TakeOrders';
import OrdersStatus from '../Pages/OrdersStatus/OrdersStatus';

function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/admin-users' element={<AdminUser />} />
          <Route path='/admin-index' element={<AdminIndex />} />
          <Route path='/admin-products' element={<AdminProducts />} />
          <Route path='/take-orders' element={<TakeOrders />} />
          <Route path='/orders-status' element={<OrdersStatus />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
