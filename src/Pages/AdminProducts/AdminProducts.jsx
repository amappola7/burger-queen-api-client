import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import './AdminProducts.scss';
import ItemProductTable from '../../components/ItemTable/ItemProductTable';

function AdminProducts() {
  return (
    <section className='admin-products'>
      <NavBar />
      <div className='admin-products__container'>
        <button
          className='generic-button create-products-button'
          type='button'
          // onClick={openCreateUserModal}
        >
          Crear Productos
        </button>
        {/* <Modal
          isOpen={isOpenFormAdminProducts}
          closeModal={closeFormAdminProductsModal}
          setEdit={setEdit}
          setValueForm={setValueForm}
        >
        </Modal> */}
        <table className='admin-products__products-table'>
          <thead>
            <tr>
              <th>Productos</th>
            </tr>
          </thead>
          <tbody>
            {/* {productsList.map((product) => (
              <ItemProductTable
                key={product.id}
                productImage={product.email}
                productName={product.role}
                productPrice={product.id}
                productCategory={product.id}
                valueForm={valueForm}
                setValueForm={setValueForm}
                setEdit={setEdit}
                openModal={openFormAdminUsersModal}
                setApiError={setApiError}
              />
            ))} */}
          </tbody>
        </table>
        <div className='admin-products__form-create-products' />
      </div>
    </section>
  );
}

export default AdminProducts;
