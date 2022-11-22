import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminIndex from '../components/Pages/AdminIndex/AdminIndex';
import AdminOrders from '../components/Pages/AdminOrders/AdminOrders';
import AdminProducts from '../components/Pages/AdminProducts/AdminProducts';
import AdminUser from '../components/Pages/AdminUsers/AdminUser';
import Login from '../components/Pages/Login/Login';

function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/admin-users' element={<AdminUser />} />
          <Route path='/admin-index' element={<AdminIndex />} />
          <Route path='/admin-products' element={<AdminProducts />} />
          <Route path='/admin-orders' element={<AdminOrders />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
