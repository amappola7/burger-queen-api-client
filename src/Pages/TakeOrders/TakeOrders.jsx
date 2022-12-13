/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
import React, { useState, useEffect, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import ItemTakeOrders from '../../components/ItemTable/ItemTakeOrder/ItemTakeOrders';
import FormTakeOrders from '../../components/FormTakeOrders/FormTakeOrders';
import { productsListRequest } from '../../API/productsRequestHTTP';
import UserContext from '../../../context/User/UserProvider';
import './TakeOrders.scss';

function TakeOrders() {
  const { user } = useContext(UserContext);
  const [productsList, setProductsList] = useState([]);
  const [valueProductsForm, setValueProductsForm] = useState({
    nameClient: '',
  });

  const [apiError, setApiError] = useState({
    error: '',
  });

  const [typeFood, setTypeFood] = useState('');
  const onFilterProducts = (type) => {
    setTypeFood(type);
  };

  useEffect(() => {
    productsListRequest(user.token)
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
  }, [user]);

  return (
    <section className='take-orders'>
      <NavBar>
        <li>
          <NavLink exact='true' to='/admin-products' className='navbar__item'>
            <i className='fa-solid fa-clipboard-list' />
            Tomar Orden
          </NavLink>
        </li>
        <li>
          <NavLink exact='true' to='/orders-status' className='navbar__item'>
            <i className='fa-solid fa-basket-shopping' />
            Pedidos
          </NavLink>
        </li>
      </NavBar>
      <div className='take-orders__container'>
        <div className='take-orders__container-products'>
          <div className='take-orders__container-category'>
            <button
              type='button'
              onClick={() => {
                onFilterProducts('');
              }}
            >
              <i className='fa-solid fa-mug-hot' />
              Todos los productos
            </button>
            <button
              type='button'
              onClick={() => {
                onFilterProducts('Desayuno');
              }}
            >
              <i className='fa-solid fa-mug-hot' />
              Desayuno
            </button>
            <button
              type='button'
              onClick={() => {
                onFilterProducts('Almuerzo');
              }}
            >
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
              {productsList.map((product) => {
                if (typeFood === product.type) {
                  return (
                    <ItemTakeOrders
                      key={product.id}
                      id={product.id}
                      productImage={product.image}
                      productName={product.name}
                      productPrice={product.price}
                      productsList={productsList}
                      setProductsList={setProductsList}
                      quantity={product.qty}
                    />
                  );
                }
                if (typeFood === '') {
                  return (
                    <ItemTakeOrders
                      key={product.id}
                      id={product.id}
                      productImage={product.image}
                      productName={product.name}
                      productPrice={product.price}
                      productsList={productsList}
                      setProductsList={setProductsList}
                      quantity={product.qty}
                    />
                  );
                }
              })}
            </tbody>
          </table>
          <Link
            to='/resume-order'
            className='generic-button create-order-button'
          >
            Crear Orden
          </Link>
        </div>
        <div className='take-orders__form-order-products'>
          <FormTakeOrders
            valueForm={valueProductsForm}
            setValueForm={setValueProductsForm}
            apiError={apiError}
            setApiError={setApiError}
            productsList={productsList}
            setProductsList={setProductsList}
          />
        </div>
      </div>
    </section>
  );
}

export default TakeOrders;
