/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import UserContext from '../../../context/User/UserProvider';
import {
  createProductsRequest,
  editProductsRequest,
} from '../../API/productsRequestHTTP';
import { formatDate } from '../../utils/formatDate';
import './FormAdminProducts.scss';

function FormAdminProducts({
  edit,
  setEdit,
  valueForm,
  setValueForm,
  closeModal,
  apiError,
  setApiError,
  isOpenFormAdminProducts,
}) {
  const { user } = useContext(UserContext);

  const MySwal = withReactContent(Swal);

  // Handle errors function
  const handleErrors = (token) => {
    if (!valueForm.type || valueForm.type === 'type') {
      setApiError({
        error: 'Elija una categoría válida',
      });
    } else if (!edit) {
      createProductsRequest(
        valueForm.name,
        valueForm.price,
        valueForm.image,
        valueForm.type,
        formatDate(),
        token
      )
        .then(() => {
          setApiError({
            error: '',
          });
          setValueForm({
            name: '',
            price: '',
            type: '',
            image: '',
            productId: '',
          });
          setEdit(false);
          MySwal.fire({
            icon: 'success',
            title: 'El producto ha sido creado con éxito',
            showConfirmButton: false,
            timer: 1600,
            customClass: {
              popup: 'user-alert',
            },
          });

          if (isOpenFormAdminProducts) closeModal();
        })
        .catch((error) => {
          console.log('ERROR AL CREAR UN PRODUCTO:', error);
          switch (error.response.data) {
            case 'Email already exists':
              console.log('Creando mal un usuario - API Error', apiError);
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
      editProductsRequest(
        valueForm.name,
        valueForm.price,
        valueForm.image,
        valueForm.type,
        formatDate(),
        token,
        valueForm.productId
      )
        .then(() => {
          setApiError({
            error: '',
          });
          setValueForm({
            name: '',
            price: '',
            type: '',
            image: '',
            productId: '',
          });
          setEdit(false);
          MySwal.fire({
            icon: 'success',
            title: 'El producto ha sido editado con ´éxito',
            showConfirmButton: false,
            timer: 1600,
            customClass: {
              popup: 'user-alert',
            },
          });

          if (isOpenFormAdminProducts) closeModal();
        })
        .catch((error) => {
          console.log('ERROR AL EDITAR UN PRODUCTO:', error);
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
      name: '',
      price: '',
      type: '',
      image: '',
      productId: '',
    });
  };

  return (
    <section className='form-admin-products'>
      <h3>{edit ? 'Editar Producto' : 'Crear Producto'}</h3>
      <form onSubmit={(e) => sendForm(e)} action=''>
        <label htmlFor='name'>
          Nombre
          <input
            onChange={(ev) => handleOnChange(ev)}
            type='text'
            name='name'
            value={valueForm.name}
            maxLength='20'
            required
          />
        </label>
        <label htmlFor='price'>
          Precio
          <input
            onChange={(ev) => handleOnChange(ev)}
            type='number'
            name='price'
            value={valueForm.price}
            max='1000000'
            min='100'
            required
          />
        </label>
        <label htmlFor='type'>
          Categoría
          <select
            onChange={(ev) => handleOnChange(ev)}
            name='type'
            value={valueForm.type}
            required
          >
            <option value='type'>-- Categoría --</option>
            <option value='Desayuno'>Desayuno</option>
            <option value='Almuerzo'>Almuerzo</option>
          </select>
        </label>
        <label htmlFor='image'>
          Cargar Imágen
          <input
            onChange={(ev) => handleOnChange(ev)}
            type='url'
            placeholder='Ingresa la URL'
            name='image'
            value={valueForm.image}
            required
          />
          <img src={valueForm.image} alt='producto' />
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
            <p className='form-admin-products__text--options'>- o -</p>
            <button
              className='form-admin-products__button--options'
              type='button'
              onClick={handleChangeToCreate}
            >
              Crea un producto
            </button>
          </>
        )}
      </form>
    </section>
  );
}

export default FormAdminProducts;
