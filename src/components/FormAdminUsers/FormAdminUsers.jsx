/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import UserContext from '../../../context/User/UserProvider';
import { createUserRequest, editUserRequest } from '../../API/usersRequestHTTP';
import './FormAdminUsers.scss';

function FormAdminUsers({
  edit,
  setEdit,
  valueForm,
  setValueForm,
  closeModal,
  apiError,
  setApiError,
  isOpenFormAdminUsers,
}) {
  const { user } = useContext(UserContext);
  const MySwal = withReactContent(Swal);

  // Handle errors function
  const handleErrors = (token) => {
    const emailRegExp =
      /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if (!valueForm.role || valueForm.role === 'role') {
      setApiError({
        error: 'Elija un rol válido',
      });
    } else if (!valueForm.email.match(emailRegExp)) {
      setApiError({
        error: 'Ingrese un correo válido',
      });
    } else if (!edit) {
      createUserRequest(
        valueForm.email,
        valueForm.password,
        valueForm.role,
        token
      )
        .then(() => {
          setApiError({
            error: '',
          });
          setValueForm({
            email: '',
            password: '',
            role: '',
            userId: '',
          });
          setEdit(false);
          MySwal.fire({
            icon: 'success',
            title: 'El usuario ha sido creado con éxito',
            showConfirmButton: false,
            timer: 1600,
            customClass: {
              popup: 'user-alert',
            },
          });
          if (isOpenFormAdminUsers) closeModal();
        })
        .catch((error) => {
          switch (error.response.data) {
            case 'Email already exists':
              setApiError({
                error: 'El correo ya está en uso',
              });
              break;
            case 'Password is too short':
              setApiError({
                error: 'La contraseña es muy corta',
              });
              break;
            default:
              break;
          }
        });
    } else {
      editUserRequest(
        valueForm.email,
        valueForm.password,
        valueForm.role,
        token,
        valueForm.userId
      )
        .then(() => {
          // console.log(apiError);
          setApiError({
            error: '',
          });
          setValueForm({
            email: '',
            password: '',
            role: '',
            userId: '',
          });
          setEdit(false);
          MySwal.fire({
            icon: 'success',
            title: 'El usuario ha sido editado con éxito',
            showConfirmButton: false,
            timer: 1600,
            customClass: {
              popup: 'user-alert',
            },
          });
          if (isOpenFormAdminUsers) closeModal();
        })
        .catch((error) => {
          switch (error.response.data) {
            case 'Email already exists':
              setApiError({
                error: 'El correo ya está en uso',
              });
              break;
            case 'Password is too short':
              setApiError({
                error: 'La contraseña es muy corta',
              });
              break;
            default:
              break;
          }
        });
    }
  };

  // onsubmit function
  const sendForm = (ev) => {
    ev.preventDefault();
    handleErrors(user.token);
  };

  // Onchange function
  const handleOnChange = (ev) => {
    setValueForm((prevState) => ({
      ...prevState,
      [ev.target.name]: ev.target.value,
    }));
  };

  const handleChangeToCreate = () => {
    setApiError({
      error: '',
    });
    setEdit(false);
    setValueForm({
      email: '',
      password: '',
      role: '',
      userId: '',
    });
  };

  return (
    <section className='form-admin-users'>
      <h3>{edit ? 'Editar Usuario' : 'Crear Usuario'}</h3>
      <form onSubmit={(e) => sendForm(e)} action=''>
        <label htmlFor='email'>
          Email
          <input
            onChange={(ev) => handleOnChange(ev)}
            type='email'
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
            value={valueForm.role}
            required
          >
            <option value='role'>-- Rol --</option>
            <option value='admin'>Admin</option>
            <option value='chef'>Chef</option>
            <option value='waiter'>Mesero</option>
          </select>
        </label>
        {apiError.error && (
          <span className='edit-create__message-error'>
            <i className='fa-solid fa-triangle-exclamation' />
            {apiError.error}
          </span>
        )}
        <button type='submit' className='generic-button'>
          {edit ? 'Editar' : 'Crear'}
        </button>
        {edit && (
          <>
            <p className='form-admin-users__text--options'>- o -</p>
            <button
              className='form-admin-users__button--options'
              type='button'
              onClick={handleChangeToCreate}
            >
              Crea un usuario
            </button>
          </>
        )}
      </form>
    </section>
  );
}

export default FormAdminUsers;
