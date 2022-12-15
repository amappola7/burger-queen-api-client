/* eslint-disable consistent-return */
/* eslint-disable react/prop-types */
import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import {
  modifyStatusOrderRequest,
  deleteOrderRequest,
} from '../../../API/ordersRequestHTTP';
import { formatDate } from '../../../utils/formatDate';

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

    const date = new Date();
    let dataRequest;
    if (user.role === 'chef' && statusOrder === 'finished') {
      dataRequest = {
        status: statusOrder,
        dateProcessed: formatDate(),
      };
    } else {
      dataRequest = {
        status: statusOrder,
      };
    }

    modifyStatusOrderRequest(id, dataRequest, user.token).catch(console.log());
  };

  const MySwal = withReactContent(Swal);
  const deletingOrder = () => {
    MySwal.fire({
      title: '¿Estás seguro que deseas eliminar la órden?',
      text: '¡No podrás deshacer esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#ff7272',
      cancelButtonColor: '#8c8787',
      confirmButtonText: 'Si, elimínalo!',
      customClass: {
        popup: 'delete-user-alert',
      },
    }).then((result) => {
      if (result.isConfirmed) {
        deleteOrderRequest(id, user.token).catch(console.log());
        Swal.fire({
          title: 'Órden eliminada!',
          icon: 'success',
          confirmButtonColor: '#fdad4e',
          customClass: {
            popup: 'delete-user-alert',
          },
        });
      }
    });
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
          <button type='button' onClick={deletingOrder}>
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
