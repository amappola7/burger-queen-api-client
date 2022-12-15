/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import UserContext from '../../../context/User/UserProvider';
import { createOrderRequest } from '../../API/ordersRequestHTTP';
import ProductOrderResume from '../ProductOrderResume/ProductOrderResume';
import './FormTakeOrders.scss';

function FormTakeOrders({
  valueForm,
  setValueForm,
  apiError,
  setApiError,
  productsList,
  setProductsList,
  closeFormTakeOrder,
  isOpenFormTakeOrder,
}) {
  const { user } = useContext(UserContext);
  const MySwal = withReactContent(Swal);
  let total = 0;

  // onsubmit function
  const sendForm = (ev) => {
    ev.preventDefault();
    const date = new Date();
    const userID = user.id;
    const data = {
      userId: userID,
      client: valueForm.nameClient,
      status: 'pending',
      dataEntry: date.toLocaleString().replaceAll('/', '-'),
      products: productsList.map((product) => {
        const newProduct = {
          qty: product.qty,
          product: {
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            type: product.type,
            dataEntry: product.dataEntry,
          },
        };
        return newProduct;
      }),
    };

    console.log(data);
    if (total === 0) {
      setApiError('Agregue algún producto para realizar la orden');
    } else {
      createOrderRequest(data, user.token)
        .then(() => {
          MySwal.fire({
            icon: 'success',
            title: 'La orden ha sido creada  con éxito',
            showConfirmButton: false,
            timer: 1600,
            customClass: {
              popup: 'user-alert',
            },
          });
          setValueForm({ nameClient: '' });
          const newProducts = [...productsList].map((product) => {
            product.qty = 0;
            return product;
          });

          setProductsList(newProducts);

          if (isOpenFormTakeOrder) closeFormTakeOrder();
        })
        .catch((error) => {
          console.log('ERROR AL CREAR UNA ORDEN', error);
        });
    }
  };

  // Onchange function
  const handleOnChange = (ev) => {
    setValueForm((prevState) => ({
      ...prevState,
      [ev.target.name]: ev.target.value,
    }));
  };

  return (
    <section className='form-take-orders'>
      <h3>Resumen Orden</h3>
      <form onSubmit={(e) => sendForm(e)} action=''>
        <div className='form-top'>
          <label htmlFor='client'>
            Cliente
            <input
              onChange={(ev) => handleOnChange(ev)}
              type='text'
              name='nameClient'
              value={valueForm.nameClient}
              required
            />
          </label>
          <p>Productos</p>
          <section className='form-take-orders__products'>
            {productsList.map((product) => {
              if (product.qty !== 0) {
                total += parseInt(product.price, 10) * product.qty;
                return (
                  <ProductOrderResume
                    key={product.id}
                    productImage={product.image}
                    productName={product.name}
                    productPrice={product.price}
                    quantity={product.qty}
                    productsList={productsList}
                    setProductsList={setProductsList}
                  />
                );
              }
            })}
          </section>
        </div>
        <div className='form-bottom'>
          {apiError && (
            <span className='edit-create__message-error'>
              <i className='fa-solid fa-triangle-exclamation' />
              {apiError}
            </span>
          )}
          <div className='total-order'>
            <p className='p-total'>Total</p>
            <p className='p-total'>{total}</p>
          </div>
          <button type='submit' className='generic-button'>
            Enviar Orden
          </button>
        </div>
      </form>
    </section>
  );
}

export default FormTakeOrders;
