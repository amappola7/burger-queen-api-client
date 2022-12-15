/* eslint-disable react/prop-types */
import React from 'react';

function ItemOrders({ clientName, children, orderDate }) {
  return (
    <tr>
      <td>
        <p>Cliente: {clientName}</p>
        <div>{children} </div>
        <p>Fecha: {orderDate}</p>
      </td>
    </tr>
  );
}

export default ItemOrders;
