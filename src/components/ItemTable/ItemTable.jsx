/* eslint-disable no-restricted-globals */
/* eslint-disable react/prop-types */
import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { deleteUserRequest } from '../../API/requestHTTP';
import './ItemTable.scss';

function ItemTable({
  username,
  userRole,
  id,
  setValueForm,
  setEdit,
  openModal,
}) {
  const MySwal = withReactContent(Swal);

  const onDelete = () => {
    const token = localStorage.getItem('token');
    MySwal.fire({
      title: '¿Estás seguro que deseas eliminar el usuario?',
      text: '¡No podrás deshacer esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#ff7272',
      cancelButtonColor: '#8c8787',
      confirmButtonText: '¡Si, elimínalo!',
      customClass: {
        popup: 'delete-user-alert',
      },
    }).then((result) => {
      if (result.isConfirmed) {
        deleteUserRequest(token, id)
          .then((response) => console.log(response))
          .catch((error) => console.log(error));
        Swal.fire({
          title: 'Usuario eliminado!',
          icon: 'success',
          confirmButtonColor: '#fdad4e',
        });
      }
    });
  };

  // On Edit Function
  const onEdit = () => {
    if (screen.width < 1000) {
      openModal();
    }
    setEdit(true);
    setValueForm({
      email: username,
      password: '',
      role: userRole,
      userId: id,
    });
  };

  return (
    <tr className='item-table'>
      <td>
        <div>
          <p>{username}</p>
          <p>{userRole}</p>
        </div>
        <div>
          <button
            onClick={onDelete}
            type='button'
            className='icon-button-delete'
          >
            <i className='fa-solid fa-trash' />
          </button>
          <button onClick={onEdit} type='button' className='icon-button-edit'>
            <i className='fa-solid fa-user-pen' />
          </button>
        </div>
      </td>
    </tr>
  );
}

export default ItemTable;
