import React, { useState } from 'react';
import { createUserRequest } from '../../API/requestHTTP';

function FormAdminUsers() {
  const [user, setUser] = useState({});

  const sendForm = (ev) => {
    ev.preventDefault();

    const token = localStorage.getItem('token');
    createUserRequest(user.email, user.password, user.role, token)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));

    ev.target.reset();
  };

  return (
    <section className='form-admin-users'>
      <h3>Crear Usuario</h3>
      <form onSubmit={(e) => sendForm(e)} action=''>
        <label htmlFor='email'>
          Email
          <input
            onChange={(ev) =>
              setUser((prevState) => ({
                ...prevState,
                email: ev.target.value,
              }))
            }
            type='email'
            id='email'
            autoComplete='email'
          />
        </label>
        <label htmlFor='password'>
          Contraseña
          <input
            onChange={(ev) =>
              setUser((prevState) => ({
                ...prevState,
                password: ev.target.value,
              }))
            }
            type='password'
            id='password'
            autoComplete='current-password'
          />
        </label>
        <label htmlFor='role'>
          Rol
          <select
            onChange={(ev) =>
              setUser((prevState) => ({
                ...prevState,
                role: ev.target.value,
              }))
            }
            name='role'
            id='role'
          >
            <option value='role'>-- Rol --</option>
            <option value='admin'>Admin</option>
            <option value='chef'>Chef</option>
            <option value='waiter'>Mesero</option>
          </select>
        </label>
        <button type='submit'>Crear</button>
      </form>
    </section>
  );
}

export default FormAdminUsers;
