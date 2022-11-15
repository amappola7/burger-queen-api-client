import React, { useState } from 'react';
import axios from 'axios';
import './styles/Login.scss';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const sendForm = (ev) => {
    ev.preventDefault();
    axios
      .post('http://localhost:8080/login', {
        email,
        password,
      })
      .then((result) => {
        setError('');
        console.log(result);
      })
      .catch((err) => {
        switch (err.response.data) {
          case 'Cannot find user':
            setError('Usuario no encontrado');
            break;
          case 'Incorrect password':
            setError('Contraseña incorrecta');
            break;
          case 'Password is too short':
            setError('La contraseña es muy corta');
            break;
          default:
            break;
        }
      });
  };

  return (
    <div className='login'>
      <img
        className='login__container-form-logo'
        src='src/assets/logo.png'
        alt='Logo'
      />
      <form
        action=''
        onSubmit={(ev) => {
          sendForm(ev);
        }}
      >
        <h1>Bienvenido </h1>
        <label htmlFor='login-correo'>
          Correo {email}
          <input
            type='text'
            id='login-correo'
            onChange={(ev) => setEmail(ev.target.value)}
            required
          />
        </label>
        <label htmlFor='login-contraseña'>
          Contraseña
          {password}
          <input
            type='password'
            id='login-contraseña'
            onChange={(ev) => setPassword(ev.target.value)}
            required
          />
        </label>
        <p>{error && `${error}`}</p>
        <button type='submit'>Ingresa</button>
      </form>
    </div>
  );
}

export default Login;
