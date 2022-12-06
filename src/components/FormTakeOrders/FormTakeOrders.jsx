/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
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
  useEffect(() => {}, [productsList]);

  // onsubmit function
  const sendForm = (ev) => {
    ev.preventDefault();
    //   const token = localStorage.getItem('token');
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
      <h3>Resumen Órden</h3>
      <form onSubmit={(e) => sendForm(e)} action=''>
        <label htmlFor='client'>
          Cliente
          <input
            onChange={(ev) => handleOnChange(ev)}
            type='text'
            name='client'
            value={valueForm.email}
            required
          />
        </label>
        <p>Productos</p>
        <section>
          {productsList.map((product) => {
            if (product.qty !== 0)
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
          })}
        </section>
        {/* {apiError.error && (
          <span className='edit-create__message-error'>
            <i className='fa-solid fa-triangle-exclamation' />
            {apiError.error}
          </span>
        )} */}
        <p>Total</p>
        <button type='submit' className='generic-button'>
          Enviar Órden
        </button>
      </form>
    </section>
  );
}

export default FormTakeOrders;
