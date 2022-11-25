/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { createUserRequest } from '../../API/requestHTTP';

function FormAdminUsers({ edit, setEdit }) {
  // states
  const [valueForm, setValueForm] = useState({
    valueEmail: '',
    valuePassword: '',
    valueRole: '',
  });

  // local storage
  const userEmail = localStorage.getItem('email');
  const userRole = localStorage.getItem('role');

  // onsubmit function
  const sendForm = (ev) => {
    ev.preventDefault();

    setEdit(false);

    const token = localStorage.getItem('token');

    createUserRequest(
      valueForm.valueEmail,
      valueForm.valuePassword,
      valueForm.valueRole,
      token
    )
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
            onChange={(ev) => {
              setValueForm((prevState) => ({
                ...prevState,
                valueEmail: ev.target.value,
              }));
            }}
            type='email'
            id='email'
            autoComplete='email'
            value={
              edit
                ? setValueForm({ valueEmail: userEmail })
                : valueForm.valueEmail
            }
            required
          />
        </label>
        <label htmlFor='password'>
          Contraseña
          <input
            onChange={(ev) => {
              setValueForm((prevState) => ({
                ...prevState,
                valuePassword: ev.target.value,
              }));
            }}
            type='password'
            id='password'
            autoComplete='current-password'
            value={valueForm.valuePassword}
            required
          />
        </label>
        <label htmlFor='role'>
          Rol
          <select
            onChange={(ev) => {
              setValueForm((prevState) => ({
                ...prevState,
                valueRole: ev.target.value,
              }));
            }}
            name='role'
            id='role'
            value={valueForm.valueRole}
            required
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
