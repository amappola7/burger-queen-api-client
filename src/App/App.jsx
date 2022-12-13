import React from 'react';
import { UserProvider } from '../../context/User/UserProvider';
import Router from '../Router/Router';
import './styles/_globals.scss';

function App() {
  return (
    <div>
      <UserProvider>
        <Router />
      </UserProvider>
    </div>
  );
}

export default App;
