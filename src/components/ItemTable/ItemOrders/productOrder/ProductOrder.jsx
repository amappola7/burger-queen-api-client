/* eslint-disable react/prop-types */
import React from 'react';

function ProductOrder({ productOrderName, productOrderQuantity }) {
  return (
    <div>
      <p>Producto: {productOrderName}</p>
      <p>Cantidad: {productOrderQuantity}</p>
    </div>
  );
}

export default ProductOrder;
