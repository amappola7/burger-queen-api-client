import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminUser from './components/AdminUser';
import Login from './components/Login';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/admin-users' element={<AdminUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
