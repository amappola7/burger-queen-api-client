import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import ItemTakeOrders from '../../components/ItemTable/ItemTakeOrder/ItemTakeOrders';
import FormTakeOrders from '../../components/FormTakeOrders/FormTakeOrders';
import { productsListRequest } from '../../API/productsRequestHTTP';
import './TakeOrders.scss';

function TakeOrders() {
  const [productsList, setProductsList] = useState([]);
  const [valueProductsForm, setValueProductsForm] = useState({
    name: '',
    price: '',
    image: '',
    productId: '',
  });
  const [apiError, setApiError] = useState({
    error: '',
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    productsListRequest(token)
      .then((response) => {
        setProductsList(response.data);
      })
      .catch((err) => {
        console.error('ADMIN USER:', err);
      });
  }, [productsList]);

  return (
    <section className='take-orders'>
      <NavBar>
        <li>
          <NavLink exact='true' to='/admin-products' className='navbar__item'>
            <i className='fa-solid fa-clipboard-list' />
            Tomar Órden
          </NavLink>
        </li>
        <li>
          <NavLink exact='true' to='/admin-orders' className='navbar__item'>
            <i className='fa-solid fa-basket-shopping' />
            Pedidos
          </NavLink>
        </li>
      </NavBar>
      <div className='take-orders__container'>
        <div className='take-orders__container-products'>
          <button type='button'>
            <i className='fa-solid fa-mug-hot' />
            Desayuno
          </button>
          <button type='button'>
            <i className='fa-solid fa-burger' />
            Almuerzo
          </button>
          <table className='take-orders__products-table'>
            <thead>
              <tr>
                <th>Productos</th>
              </tr>
            </thead>
            <tbody>
              {productsList.map((product) => (
                <ItemTakeOrders
                  key={product.id}
                  id={product.id}
                  productImage={product.image}
                  productName={product.name}
                  productPrice={product.price}
                />
              ))}
            </tbody>
          </table>
          <button className='generic-button' type='button'>
            Crear Órden
          </button>
        </div>
        <div className='take-orders__form-order-products'>
          <FormTakeOrders
            valueForm={valueProductsForm}
            setValueForm={setValueProductsForm}
            apiError={apiError}
            setApiError={setApiError}
          />
        </div>
      </div>
    </section>
  );
}

export default TakeOrders;
