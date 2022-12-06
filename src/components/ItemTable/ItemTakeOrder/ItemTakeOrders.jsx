/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
import React from 'react';
import './ItemTakeOrders.scss';

function ItemTakeOrders({
  productImage,
  productName,
  productPrice,
  quantity,
  productsList,
  setProductsList,
}) {
  // event click buttons
  const onRemoveProduct = () => {
    const newProducts = [...productsList].map((product) => {
      if (product.qty === 1) product.dataEntry = '';
      if (product.name === productName && product.qty > 0) {
        product.qty -= 1;
      }

      return product;
    });

    console.log('ELIMINANDO', newProducts);
    setProductsList(newProducts);
  };

  const onAddProduct = () => {
    const newProducts = [...productsList].map((product) => {
      if (product.name === productName) {
        product.qty += 1;
      }
      return product;
    });

    console.log('AÑADIENDO', newProducts);
    setProductsList(newProducts);
  };

  return (
    <tr className='item-table'>
      <td>
        <img src={productImage} alt='product' />
        <div className='item-table__product-data'>
          <p>{productName}</p>
          <div className='down-row'>
            <p>{`$${productPrice}`}</p>
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
          </div>
        </div>
      </td>
    </tr>
  );
}

export default ItemTakeOrders;
