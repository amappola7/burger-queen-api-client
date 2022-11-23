import React from 'react';

function FormAdminUsers() {
  return (
    <section className='form-admin-users'>
      <h3>Crear Usuario</h3>
      <form action=''>
        <label htmlFor='email'>
          Nombre
          <input type='email' id='email' />
        </label>
        <label htmlFor='password'>
          Contraseña
          <input type='password' id='password' />
        </label>
        <label htmlFor='role'>
          Rol
          <select name='role' id='role'>
            <option value='admin'>Admin</option>
            <option value='chef'>Chef</option>
            <option value='waiter'>Mesero</option>
          </select>
        </label>
        <button type='submit'>Crear</button>
      </form>
    </section>
  );
}

export default FormAdminUsers;
