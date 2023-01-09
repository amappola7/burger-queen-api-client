/* eslint-disable react/prop-types */
import React from 'react';
import './ProductOrder.scss';

function ProductOrder({ productOrderName, productOrderQuantity }) {
  return (
    <div className='product-order-item'>
      <p>{productOrderName}</p>
      <p>
        <b className='product-order__item-title'>Cantidad:</b>{' '}
        {productOrderQuantity}
      </p>
    </div>
  );
}

export default ProductOrder;
