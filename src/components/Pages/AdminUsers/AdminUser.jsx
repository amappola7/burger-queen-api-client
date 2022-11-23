import React, { useState, useEffect } from 'react';
import NavBar from '../../NavBar/NavBar';
import ItemTable from '../../ItemTable/ItemTable';
import { usersListRequest } from '../../API/requestHTTP';
import FormAdminUsers from '../../FormAdminUsers/FormAdminUsers';

function AdminUser() {
  // const AuthToken = useContext(AuthTokenContext);

  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    usersListRequest(token)
      .then((response) => {
        setUsersList(response.data);
        console.log(response);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <section className='admin-users'>
      <NavBar />
      <button className='generic-button' type='button'>
        Crear Usuario
      </button>
      <table>
        <thead>
          <tr>
            <th>Usuarios</th>
          </tr>
        </thead>
        <tbody>
          {usersList.map((user) => (
            <ItemTable key={user.id} username={user.email} role={user.role} />
          ))}
        </tbody>
      </table>
      <FormAdminUsers />
    </section>
  );
}

export default AdminUser;
