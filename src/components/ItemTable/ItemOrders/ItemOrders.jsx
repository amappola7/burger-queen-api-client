/* eslint-disable no-console */
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
import './ItemOrders.scss';

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
      return (
        <button className='send-button' type='button' onClick={changeStatus}>
          Completar
        </button>
      );
    }
    if (role === 'waiter' && statusOrder === 'finished') {
      return (
        <button className='send-button' type='button' onClick={changeStatus}>
          Entregar
        </button>
      );
    }
  };

  return (
    <tr className='item-order'>
      <td>
        <div className='item-order__content'>
          <p>
            <b className='item-order__content-title'>Cliente:</b> {clientName}
          </p>
          <p>
            <b className='item-order__content-title'>Productos:</b>
          </p>
          <div>{children} </div>
          <p className='preparation-time item-order__content-title'>
            <b>
              {`${
                orderStatus !== 'pending' ? 'Tiempo de Preparación:' : 'Fecha:'
              } `}
            </b>
            {orderDate}
          </p>
        </div>
        <div className='item-order__options'>
          {renderCheckBox(user.role, orderStatus)}
          {orderStatus === 'pending' && user.role !== 'admin' ? (
            <button
              className='edit-button'
              type='button'
              onClick={deletingOrder}
            >
              <i className='fa-solid fa-trash' />
            </button>
          ) : (
            ''
          )}
        </div>
      </td>
    </tr>
  );
}

export default ItemOrders;
