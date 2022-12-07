/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable react/prop-types */
import React from 'react';
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
}) {
  let total = 0;

  // onsubmit function
  const sendForm = (ev) => {
    ev.preventDefault();
    const date = new Date();
    const token = localStorage.getItem('token');
    const userID = localStorage.getItem('userID');
    const data = {
      userId: userID,
      client: valueForm.nameClient,
      products: productsList.filter((product) => {
        if (product.qty > 0) {
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
        }
      }),

      status: 'pending',
      dataEntry: date.toLocaleString().replaceAll('/', '-'),
    };

    createOrderRequest(data, token)
      .then((response) => {
        console.log('ORDEN CREADA', response);
      })
      .catch((error) => {
        console.log(error);
      });
    //   handleErrors(token);
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
                total += parseInt(product.price, 10);
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
          {/* {apiError.error && (
          <span className='edit-create__message-error'>
            <i className='fa-solid fa-triangle-exclamation' />
            {apiError.error}
          </span>
        )} */}
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
