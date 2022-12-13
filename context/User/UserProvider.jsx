/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
import React, { createContext, useState } from 'react';

const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState({});
  const saveUser = (info) => {
    setUser(info);
  };

  const cleanUser = () => {
    setUser('');
  };

  const data = { user, saveUser, cleanUser };
  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
}

export { UserProvider };
export default UserContext;
