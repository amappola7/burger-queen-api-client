/* eslint-disable react/prop-types */
import React from 'react';
import './ItemTakeOrders.scss';

function ItemTakeOrders({ productImage, productName, productPrice }) {
  return (
    <tr className='item-table'>
      <td>
        <div className='item-table__product-data'>
          <img src={productImage} alt='product' />
          <p>{productName}</p>
          <p>{productPrice}</p>
        </div>
        <div>
          <button
            /* onClick={onDelete} */
            type='button'
            className='icon-button-minus'
          >
            <i className='fa-solid fa-minus' />
          </button>
          <p>0</p>
          <button
            /* onClick={onEdit} */ type='button'
            className='icon-button-plus'
          >
            <i className='fa-solid fa-plus' />
          </button>
        </div>
      </td>
    </tr>
  );
}

export default ItemTakeOrders;
