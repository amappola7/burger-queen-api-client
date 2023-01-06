/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
import React, { createContext, useState } from 'react';

const UserContext = createContext();

function UserProvider({ children }) {
  const lsContext = JSON.parse(window.localStorage.getItem('lsInfoUser')) || '';
  const [user, setUser] = useState({
    id: lsContext.id,
    token: lsContext.token,
    role: lsContext.role,
  });
  const [navBarContext, setNavBarContext] = useState(false);
  const saveUser = (info) => {
    setUser(info);
  };

  const cleanUser = () => {
    setUser('');
  };

  const data = {
    user,
    setUser,
    saveUser,
    cleanUser,
    navBarContext,
    setNavBarContext,
  };
  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
}

export { UserProvider };
export default UserContext;
