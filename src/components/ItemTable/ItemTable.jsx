/* eslint-disable react/prop-types */
import React from 'react';
import { editUserRequest, deleteUserRequest } from '../../API/requestHTTP';
import './ItemTable.scss';

function ItemTable({ username, role, id }) {
  const onDelete = () => {
    const token = localStorage.getItem('token');
    deleteUserRequest(token, id)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  const onEdit = () => {};

  return (
    <tr className='item-table'>
      <td>
        <div>
          <p>{username}</p>
          <p>{role}</p>
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
