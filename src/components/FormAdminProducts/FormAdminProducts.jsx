import React from 'react';
import './FormAdminProducts.scss';

function FormAdminProducts({ closeModal }) {
  return (
    <section className='form-admin-products'>
      <h3>{edit ? 'Editar Producto' : 'Crear Producto'}</h3>
      <form onSubmit={(e) => sendForm(e)} action=''>
        <label htmlFor='name'>
          Nombre
          <input
            onChange={(ev) => handleOnChange(ev)}
            type='text'
            name='name'
            value={valueForm.name}
            required
          />
        </label>
        <label htmlFor='price'>
          Precio
          <input
            onChange={(ev) => handleOnChange(ev)}
            type='number'
            name='price'
            value={valueForm.price}
            required
          />
        </label>
        <label htmlFor='type'>
          Categoría
          <select
            onChange={(ev) => handleOnChange(ev)}
            name='type'
            value={valueForm.type}
            required
          >
            <option value='type'>-- Categoría --</option>
            <option value='Desayuno'>Desayuno</option>
            <option value='Almuerzo'>Almuerzo</option>
          </select>
        </label>
        <label htmlFor='image'>
          Cargar Imágen
          <input
            type='file'
            accept='image/png, image/jpeg, image/jpg'
            name='product-image'
          />
        </label>
        {/* {apiError.error && (
          <span className='edit-create__message-error'>
            <i className='fa-solid fa-triangle-exclamation' />
            {apiError.error}
          </span>
        )} */}
        <button type='submit' className='generic-button'>
          {edit ? 'Editar' : 'Crear'}
        </button>
        {edit && (
          <>
            <p className='form-admin-products__text--options'>- o -</p>
            <button
              className='form-admin-products__button--options'
              type='button'
              onClick={handleChangeToCreate}
            >
              Crea un producto
            </button>
          </>
        )}
      </form>
    </section>
  );
}

export default FormAdminProducts;
