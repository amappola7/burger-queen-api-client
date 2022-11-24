/* eslint-disable react/prop-types */
import React from 'react';
import './ItemTable.scss';

function ItemTable({ username, role }) {
  return (
    <tr className='item-table'>
      <td>
        <div>
          <p>{username}</p>
          <p>{role}</p>
        </div>
        <div>
          <button type='button' className='icon-button-delete'>
            <i className='fa-solid fa-trash' />
          </button>
          <button type='button' className='icon-button-edit'>
            <i className='fa-solid fa-user-pen' />
          </button>
        </div>
      </td>
    </tr>
  );
}

export default ItemTable;
