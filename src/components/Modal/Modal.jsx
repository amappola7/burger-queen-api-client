/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import './Modal.scss';

function Modal({ isOpen, closeModal, children }) {
  const handleModalContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className={`modal-container ${isOpen && 'modal-container--open'}`}
      onClick={closeModal}
    >
      <div className='modal-content' onClick={handleModalContentClick}>
        <button
          className='modal-content__close-button'
          type='button'
          onClick={closeModal}
        >
          <i className='fa-solid fa-xmark' />
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
