/* eslint-disable react/prop-types */
import React from 'react';
import { useEffect } from 'react';
import './ItemTakeOrders.scss';

function ItemTakeOrders({
  productImage,
  productName,
  productPrice,
  setOrders,
  orders,
  quantity,
  productsList,
  setProductsList,
}) {
  // event click buttons
  const onRemoveProduct = () => {
    const newProducts = [...productsList].map((product) => {
      if (product.name === productName && product.qty > 0) {
        product.qty -= 1;
      }
      return product;
    });

    setProductsList(newProducts);
  };

  const onAddProduct = () => {
    const newProducts = [...productsList].map((product) => {
      if (product.name === productName) {
        product.qty += 1;
      }
      return product;
    });

    setProductsList(newProducts);
  };

  return (
    <tr className='item-table'>
      <td>
        <div className='item-table__product-data'>
          <img src={productImage} alt='product' />
          <p>{productName}</p>
          <p>{productPrice}</p>
        </div>
        <div className='counter-products'>
          <button
            onClick={onRemoveProduct}
            type='button'
            className='icon-button-minus'
          >
            <i className='fa-solid fa-minus' />
          </button>
          <p>{quantity}</p>
          <button
            onClick={onAddProduct}
            type='button'
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
