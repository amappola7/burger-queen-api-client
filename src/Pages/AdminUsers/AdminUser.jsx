import React, { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import ItemTable from '../../components/ItemTable/ItemTable';
import { usersListRequest } from '../../API/requestHTTP';
import FormAdminUsers from '../../components/FormAdminUsers/FormAdminUsers';
import './AdminUsers.scss';

function AdminUser() {
  // const AuthToken = useContext(AuthTokenContext);

  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    usersListRequest(token)
      .then((response) => {
        setUsersList(response.data);
        // console.log(response);
      })
      .catch((err) => {
        console.error('ADMIN USER:', err);
      });
  }, [usersList]);

  return (
    <section className='admin-users'>
      <NavBar />
      <div className='admin-user__container'>
        <button className='generic-button' type='button'>
          Crear Usuario
        </button>
        <table className='admin-user__users-table'>
          <thead>
            <tr>
              <th>Usuarios</th>
            </tr>
          </thead>
          <tbody>
            {usersList.map((user) => (
              <ItemTable
                key={user.id}
                username={user.email}
                role={user.role}
                id={user.id}
              />
            ))}
          </tbody>
        </table>
        <div className='admin-user__form-create-user'>
          <FormAdminUsers />
        </div>
      </div>
    </section>
  );
}

export default AdminUser;
