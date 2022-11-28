/* eslint-disable react/prop-types */
import React from 'react';
import { createUserRequest, editUserRequest } from '../../API/requestHTTP';
import './FormAdminUsers.scss';

function FormAdminUsers({ edit, setEdit, valueForm, setValueForm }) {
  // onsubmit function
  const sendForm = (ev) => {
    ev.preventDefault();
    const token = localStorage.getItem('token');

    if (!edit) {
      createUserRequest(
        valueForm.email,
        valueForm.password,
        valueForm.role,
        token
      )
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    } else {
      editUserRequest(
        valueForm.email,
        valueForm.password,
        valueForm.role,
        token,
        valueForm.userId
      )
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    }

    setEdit(false);
    setValueForm({
      email: '',
      password: '',
      role: '',
      userId: '',
    });
  };

  // Onchange function
  const handleOnChange = (ev) => {
    setValueForm((prevState) => ({
      ...prevState,
      [ev.target.name]: ev.target.value,
    }));
  };

  return (
    <section className='form-admin-users'>
      <h3>Crear Usuario</h3>
      <form onSubmit={(e) => sendForm(e)} action=''>
        <label htmlFor='email'>
          Email
          <input
            onChange={(ev) => handleOnChange(ev)}
            type='email'
            id='email'
            autoComplete='email'
            name='email'
            value={valueForm.email}
            required
          />
        </label>
        <label htmlFor='password'>
          Contraseña
          <input
            onChange={(ev) => handleOnChange(ev)}
            type='password'
            id='password'
            autoComplete='current-password'
            name='password'
            value={valueForm.password}
            required
          />
        </label>
        <label htmlFor='role'>
          Rol
          <select
            onChange={(ev) => handleOnChange(ev)}
            name='role'
            id='role'
            value={valueForm.role}
            required
          >
            <option value='role'>-- Rol --</option>
            <option value='admin'>Admin</option>
            <option value='chef'>Chef</option>
            <option value='waiter'>Mesero</option>
          </select>
        </label>
        <button type='submit' className='generic-button'>
          {edit ? 'Editar' : 'Crear'}
        </button>
      </form>
    </section>
  );
}

export default FormAdminUsers;
