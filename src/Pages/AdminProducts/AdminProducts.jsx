import React, { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import './AdminProducts.scss';
import ItemProductTable from '../../components/ItemTable/ItemProductTable';
import Modal from '../../components/Modal/Modal';
import useModal from '../../hooks/useModal';
import FormAdminProducts from '../../components/FormAdminProducts/FormAdminProducts';
import { productsListRequest } from '../../API/productsRequestHTTP';

function AdminProducts() {
  const [
    isOpenFormAdminProducts,
    openFormAdminProductsModal,
    closeFormAdminProductsModal,
  ] = useModal();
  const [productsList, setProductsList] = useState([]);
  const [edit, setEdit] = useState(false);
  const [valueProductsForm, setValueProductsForm] = useState({
    name: '',
    price: '',
    type: '',
    image: '',
    productId: '',
  });
  const [apiError, setApiError] = useState({
    error: '',
  });
  const openCreateProductsModal = () => {
    openFormAdminProductsModal();
    setEdit(false);
    setValueProductsForm({
      name: '',
      price: '',
      type: '',
      image: '',
      productId: '',
    });
  };
  useEffect(() => {
    const token = localStorage.getItem('token');
    productsListRequest(token)
      .then((response) => {
        setProductsList(response.data);
        // console.log(response);
      })
      .catch((err) => {
        console.error('ADMIN USER:', err);
      });
  }, [productsList]);

  return (
    <section className='admin-products'>
      <NavBar />
      <div className='admin-products__container'>
        <button
          className='generic-button create-products-button'
          type='button'
          onClick={openCreateProductsModal}
        >
          Crear Productos
        </button>
        <Modal
          isOpen={isOpenFormAdminProducts}
          closeModal={closeFormAdminProductsModal}
          setEdit={setEdit}
          setValueForm={setValueProductsForm}
        >
          <FormAdminProducts
            edit={edit}
            setEdit={setEdit}
            valueForm={valueProductsForm}
            setValueForm={setValueProductsForm}
            apiError={apiError}
            setApiError={setApiError}
            isOpenFormAdminProducts={isOpenFormAdminProducts}
            closeModal={closeFormAdminProductsModal}
          />
        </Modal>
        <table className='admin-products__products-table'>
          <thead>
            <tr>
              <th>Productos</th>
            </tr>
          </thead>
          <tbody>
            {productsList.map((product) => (
              <ItemProductTable
                key={product.id}
                productImage={product.image}
                productName={product.name}
                productPrice={product.price}
                productCategory={product.type}
                valueForm={valueProductsForm}
                setValueForm={setValueProductsForm}
                setEdit={setEdit}
                openModal={openFormAdminProductsModal}
                setApiError={setApiError}
              />
            ))}
          </tbody>
        </table>
        <div className='admin-products__form-create-products'>
          <FormAdminProducts
            edit={edit}
            setEdit={setEdit}
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

export default AdminProducts;
