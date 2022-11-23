/* eslint-disable react/prop-types */
import React from 'react';

function ItemTable({ username, role }) {
  return (
    <tr>
      <td>
        <div>
          <p>{username}</p>
          <p>{role}</p>
        </div>
        <div>
          <button type='button' className='icon-button'>
            <i className='fa-solid fa-trash' />
          </button>
          <button type='button' className='icon-button'>
            <i className='fa-solid fa-user-pen' />
          </button>
        </div>
      </td>
    </tr>
  );
}

export default ItemTable;
