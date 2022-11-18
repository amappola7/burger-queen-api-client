import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminUser from '../components/Pages/AdminUsers/AdminUser';
import Login from '../components/Pages/Login/Login';

function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/admin-users' element={<AdminUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
