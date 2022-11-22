import React from 'react';

function ItemTable({ username, role }) {
  return (
    <tbody>
      <tr>
        <td>
          <div>
            <p>{username}</p>
            <p>{role}</p>
          </div>
          <div>
            <i className='fa-solid fa-trash' />
            <i className='fa-solid fa-user-pen' />
          </div>
        </td>
      </tr>
    </tbody>
  );
}

export default ItemTable;
