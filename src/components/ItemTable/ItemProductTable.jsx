/* eslint-disable react/prop-types */
import React from 'react';
import './ItemProductTable.scss';

function ItemProductTable({
  productImage,
  productName,
  productPrice,
  productCategory,
  onDelete,
  onEdit,
}) {
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
