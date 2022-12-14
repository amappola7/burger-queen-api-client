/* eslint-disable react/prop-types */
import React from 'react';

function ItemOrders({ clientName, children, orderDate }) {
  return (
    <tr>
      <td>
        <p>{clientName}</p>
        <div>{children} </div>
        <p>{orderDate}</p>
      </td>
    </tr>
  );
}

export default ItemOrders;
