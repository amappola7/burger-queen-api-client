import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import ItemTable from '../../components/ItemTable/ItemUser/ItemUserTable';
import { usersListRequest } from '../../API/usersRequestHTTP';
import FormAdminUsers from '../../components/FormAdminUsers/FormAdminUsers';
import './AdminUsers.scss';
import useModal from '../../hooks/useModal';
import Modal from '../../components/Modal/Modal';

function AdminUser() {
  // const AuthToken = useContext(AuthTokenContext);
  const [
    isOpenFormAdminUsers,
    openFormAdminUsersModal,
    closeFormAdminUsersModal,
  ] = useModal();
  const [usersList, setUsersList] = useState([]);
  const [edit, setEdit] = useState(false);
  const [valueForm, setValueForm] = useState({
    email: '',
    password: '',
    role: '',
    userId: '',
  });
  const [apiError, setApiError] = useState({
    error: '',
  });

  const navbarState = JSON.parse(localStorage.getItem('navbar'));

  const openCreateUserModal = () => {
    openFormAdminUsersModal();
    setEdit(false);
    setValueForm({
      email: '',
      password: '',
      role: '',
      userId: '',
    });
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    usersListRequest(token)
      .then((response) => {
        setUsersList(response.data);
        // console.log(response);
      })
      .catch((err) => {
        console.error('ADMIN USER:', err);
      });
  }, [usersList]);

  return (
    <section className='admin-users'>
      <NavBar>
        <li>
          <NavLink exact='true' to='/admin-users' className='navbar__item'>
            <i className='fa-solid fa-users' />
            Usuarios
          </NavLink>
        </li>
        <li>
          <NavLink exact='true' to='/admin-products' className='navbar__item'>
            <i className='fa-solid fa-burger' />
            Productos
          </NavLink>
        </li>
        <li>
          <NavLink exact='true' to='/admin-orders' className='navbar__item'>
            <i className='fa-solid fa-basket-shopping' />
            Pedidos
          </NavLink>
        </li>
      </NavBar>
      <div
        className={
          navbarState === true
            ? 'admin-user__container--closed'
            : 'admin-user__container'
        }
      >
        <button
          className='generic-button create-user-button'
          type='button'
          onClick={openCreateUserModal}
        >
          Crear Usuario
        </button>
        <Modal
          isOpen={isOpenFormAdminUsers}
          closeModal={closeFormAdminUsersModal}
          setEdit={setEdit}
          setValueForm={setValueForm}
        >
          <FormAdminUsers
            edit={edit}
            setEdit={setEdit}
            valueForm={valueForm}
            setValueForm={setValueForm}
            closeModal={closeFormAdminUsersModal}
            apiError={apiError}
            setApiError={setApiError}
            openFormAdminUsersModal={openFormAdminUsersModal}
            isOpenFormAdminUsers={isOpenFormAdminUsers}
          />
        </Modal>
        <table className='admin-user__users-table'>
          <thead>
            <tr>
              <th>Usuarios</th>
            </tr>
          </thead>
          <tbody>
            {usersList.map((user) => (
              <ItemTable
                key={user.id}
                username={user.email}
                userRole={user.role}
                id={user.id}
                valueForm={valueForm}
                setValueForm={setValueForm}
                setEdit={setEdit}
                openModal={openFormAdminUsersModal}
                setApiError={setApiError}
              />
            ))}
          </tbody>
        </table>
        <div className='admin-user__form-create-user'>
          <FormAdminUsers
            edit={edit}
            setEdit={setEdit}
            valueForm={valueForm}
            setValueForm={setValueForm}
            apiError={apiError}
            setApiError={setApiError}
          />
        </div>
      </div>
    </section>
  );
}

export default AdminUser;
