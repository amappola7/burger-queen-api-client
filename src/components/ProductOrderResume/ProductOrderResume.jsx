/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
import React from 'react';
import './ProductOrderResume.scss';

function ProductOrderResume({
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

  const onDeleteProductOrder = () => {
    const newProducts = [...productsList].map((product) => {
      if (product.name === productName) {
        product.qty = 0;
      }
      return product;
    });

    setProductsList(newProducts);
  };

  return (
    <div className='product-order'>
      <img src={productImage} alt='Product' />
      <div className='product-order__info'>
        <p>{productName}</p>
        <p>{`$${productPrice}`}</p>
        <div className='down-row'>
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
          <button
            onClick={onDeleteProductOrder}
            type='button'
            className='trash'
          >
            <i className='fa-solid fa-trash' />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductOrderResume;
