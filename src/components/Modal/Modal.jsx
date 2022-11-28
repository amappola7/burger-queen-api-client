/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import './Modal.scss';

function Modal({ isOpen, closeModal, children, setEdit, setValueForm }) {
  const handleModalContentClick = (e) => {
    e.stopPropagation();
    setEdit(false);
    // setValueForm({
    //   email: '',
    //   password: '',
    //   role: '',
    //   userId: '',
    // });
  };

  const handleCloseModal = () => {
    closeModal();
    setEdit(false);
    setValueForm({
      email: '',
      password: '',
      role: '',
      userId: '',
    });
  };

  return (
    <div
      className={`modal-container ${isOpen && 'modal-container--open'}`}
      onClick={handleCloseModal}
    >
      <div className='modal-content' onClick={handleModalContentClick}>
        <button
          className='modal-content__close-button'
          type='button'
          onClick={handleCloseModal}
        >
          <i className='fa-solid fa-xmark' />
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
