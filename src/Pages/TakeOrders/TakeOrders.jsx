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
  const [orders, setOrders] = useState([]);
  const [apiError, setApiError] = useState({
    error: '',
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    productsListRequest(token)
      .then((response) => {
        const products = response.data.map((product) => ({
          ...product,
          qty: 0,
        }));
        setProductsList(products);
      })
      .catch((err) => {
        console.error('ADMIN USER:', err);
      });
  }, []);

  useEffect(() => console.log(orders), [orders]);

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
          <div className='take-orders__container-category'>
            <button type='button'>
              <i className='fa-solid fa-mug-hot' />
              Desayuno
            </button>
            <button type='button'>
              <i className='fa-solid fa-burger' />
              Almuerzo
            </button>
          </div>
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
                  setOrders={setOrders}
                  orders={orders}
                  productsList={productsList}
                  setProductsList={setProductsList}
                  quantity={product.qty}
                />
              ))}
            </tbody>
          </table>
          <button className='generic-button create-order-button' type='button'>
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
