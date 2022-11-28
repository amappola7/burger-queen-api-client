import { useState } from 'react';

function useModal(initialValue = false) {
  const [isOpenModal, setOpenModal] = useState(initialValue);

  const openModal = () => {
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  };
  return [isOpenModal, openModal, closeModal];
}

export default useModal;
