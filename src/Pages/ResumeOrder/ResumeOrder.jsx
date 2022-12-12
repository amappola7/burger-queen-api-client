import React from 'react';
import FormTakeOrders from '../../components/FormTakeOrders/FormTakeOrders';

function ResumeOrder() {
  return (
    <section className='resume-order'>
      <div className='buttons'>
        <button type='button'>
          <i className='fa-solid fa-arrow-left' />
        </button>
        <button type='button'>Cancelar</button>
      </div>
      <FormTakeOrders
      // valueForm={valueProductsForm}
      // setValueForm={setValueProductsForm}
      // apiError={apiError}
      // setApiError={setApiError}
      // productsList={productsList}
      // setProductsList={setProductsList}
      />
    </section>
  );
}

export default ResumeOrder;
