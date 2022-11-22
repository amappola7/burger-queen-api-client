import React, { useState, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import requestHTTP from '../../API/requestHTTP';
import './styles/Login.scss';

const AuthTokenContext = createContext();

function Login() {
  // Create states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate(); // Router

  // get credentials and make request
  const sendForm = (ev) => {
    ev.preventDefault();
    requestHTTP('post', 'login', { email, password })
      .then(() => {
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

export default { Login, AuthTokenContext };
