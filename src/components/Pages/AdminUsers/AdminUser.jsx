import React, { useContext } from 'react';
import NavBar from '../../NavBar/NavBar';
import requestHTTP from '../../API/requestHTTP';

function AdminUser() {
  // const AuthToken = useContext(AuthTokenContext);

  requestHTTP('get', 'users', token).then((response) =>
    console.log('PETICIÓN', response)
  );

  return (
    <section>
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
        {/* Table Body */}
      </table>
    </section>
  );
}

export default AdminUser;
