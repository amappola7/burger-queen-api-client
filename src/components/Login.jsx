import React from 'react';
import './styles/Login.scss';

function Login() {
  return (
    <div className='login'>
      <img
        className='login__container-form-logo'
        src='src/assets/logo.png'
        alt='Logo'
      />
      <form action=''>
        <h1>Bienvenido</h1>
        <label htmlFor='login-correo'>
          Correo
          <input type='text' id='login-correo' required />
        </label>
        <label htmlFor='login-contraseña'>
          Contraseña
          <input type='password' id='login-contraseña' required />
        </label>
        <button type='submit'>Ingresa</button>
      </form>
    </div>
  );
}

export default Login;
