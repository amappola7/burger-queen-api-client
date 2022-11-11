import React from 'react';
import './login.scss';

function Login() {
  return (
    <div className='login'>
      <img
        className='login__background'
        src='src/assets/background.jpg'
        alt='background'
      />
      <img className='login__vector' src='src/assets/form.png' alt='vector' />
      <div className='login__container-form'>
        <img
          className='login__container-formlogo'
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
    </div>
  );
}

export default Login;
