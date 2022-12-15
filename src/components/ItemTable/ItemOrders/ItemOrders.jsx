/* eslint-disable consistent-return */
/* eslint-disable react/prop-types */
import React from 'react';
import { modifyStatusOrderRequest } from '../../../API/ordersRequestHTTP';

function ItemOrders({
  id,
  clientName,
  children,
  orderDate,
  orderStatus,
  user,
}) {
  const changeStatus = () => {
    let statusOrder;
    if (orderStatus === 'pending') {
      statusOrder = 'finished';
    } else if (orderStatus === 'finished' && user.role === 'chef') {
      statusOrder = 'pending';
    } else if (orderStatus === 'finished' && user.role === 'waiter') {
      statusOrder = 'delivered';
    }

    const dataRequest = {
      status: statusOrder,
    };

    modifyStatusOrderRequest(id, dataRequest, user.token)
      .then(console.log('PETICIÓN CAMBIAR ESTADO'))
      .catch(console.log());
  };

  const renderCheckBox = (role, statusOrder) => {
    if (role === 'chef' && statusOrder === 'pending') {
      return <input type='checkbox' onClick={changeStatus} />;
    }
    if (role === 'waiter' && statusOrder === 'finished') {
      return <input type='checkbox' onClick={changeStatus} />;
    }
  };

  return (
    <tr>
      <td>
        <p>Cliente: {clientName}</p>
        <div>{children} </div>
        <p>Fecha: {orderDate}</p>
        {renderCheckBox(user.role, orderStatus)}
        {orderStatus === 'pending' && user.role !== 'admin' ? (
          <button type='button'>
            <i className='fa-solid fa-trash' />
          </button>
        ) : (
          ''
        )}
      </td>
    </tr>
  );
}

export default ItemOrders;
