/* eslint-disable react/prop-types */
import React from 'react';

function ProductOrder({ productOrderName, productOrderQuantity }) {
  return (
    <div>
      <p>{productOrderName}</p>
      <p>{productOrderQuantity}</p>
    </div>
  );
}

export default ProductOrder;
