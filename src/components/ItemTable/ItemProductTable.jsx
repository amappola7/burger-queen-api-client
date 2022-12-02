/* eslint-disable react/prop-types */
import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { deleteProductsRequest } from '../../API/productsRequestHTTP';
import './ItemProductTable.scss';

function ItemProductTable({
  productImage,
  productName,
  productPrice,
  productCategory,
  setApiError,
  setValueForm,
  setEdit,
  openModal,
  id,
}) {
  const MySwal = withReactContent(Swal);

  const onDelete = () => {
    const token = localStorage.getItem('token');
    MySwal.fire({
      title: '¿Estás seguro que deseas eliminar el producto?',
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
        deleteProductsRequest(token, id)
          .then((response) => console.log(response))
          .catch((error) => console.log(error));
        Swal.fire({
          title: 'Producto eliminado!',
          icon: 'success',
          confirmButtonColor: '#fdad4e',
          customClass: {
            popup: 'delete-user-alert',
          },
        });
      }
    });
  };

  // On Edit Function
  const onEdit = () => {
    setApiError({
      error: '',
    });
    if (window.innerWidth < 1000) {
      openModal();
    }
    setEdit(true);
    setValueForm({
      name: productName,
      price: productPrice,
      type: productCategory,
      image: productImage,
      productId: id,
    });
  };

  return (
    <tr className='item-table'>
      <td>
        <div className='item-table__product-data'>
          <img src={productImage} alt='product' />
          <p>{productName}</p>
          <p>{productPrice}</p>
          <p>{productCategory}</p>
        </div>
        <div>
          <button
            onClick={onDelete}
            type='button'
            className='icon-button-delete'
          >
            <i className='fa-solid fa-trash' />
          </button>
          <button onClick={onEdit} type='button' className='icon-button-edit'>
            <i className='fa-solid fa-user-pen' />
          </button>
        </div>
      </td>
    </tr>
  );
}

export default ItemProductTable;
