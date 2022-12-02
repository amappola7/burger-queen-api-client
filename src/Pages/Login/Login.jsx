import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authLoginRequest } from '../../API/usersRequestHTTP';
import './styles/Login.scss';

function Login() {
  // Create states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate(); // Router

  // get credentials and make request
  const sendForm = (ev) => {
    ev.preventDefault();
    authLoginRequest(email, password)
      .then((response) => {
        localStorage.setItem('token', response.data.accessToken);
        setError('');
        navigate('/admin-index');
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
    <section className='login'>
      <div className='login__image'>
        <img
          className='login__background'
          src='src/assets/background.png'
          alt='backgorund'
        />
        <img
          className='login__container-form-logo'
          src='src/assets/logo.webp'
          alt='Logo'
        />
      </div>
      <form
        action=''
        onSubmit={(ev) => {
          sendForm(ev);
        }}
      >
        <img
          className='login__container-form-logo--desktop'
          src='src/assets/logo.webp'
          alt='Logo'
        />
        <h1>Bienvenido</h1>
        <label htmlFor='login-correo'>
          Correo
          <input
            type='email'
            id='login-correo'
            onChange={(ev) => setEmail(ev.target.value)}
            required
            placeholder='user@system.xyz'
            autoComplete='email'
          />
        </label>
        <label htmlFor='login-contraseña'>
          Contraseña
          <input
            type='password'
            id='login-contraseña'
            onChange={(ev) => setPassword(ev.target.value)}
            required
            placeholder='••••••••'
            autoComplete='current-password'
          />
        </label>

        {error && (
          <span className='login__message-error'>
            <i className='fa-solid fa-triangle-exclamation' />
            {error}
          </span>
        )}

        <button className='login__button' type='submit'>
          Ingresa
        </button>
      </form>
    </section>
  );
}

export default Login;
