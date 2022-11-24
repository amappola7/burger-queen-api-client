/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import './BurguerButton.scss';

function BurguerButton({ clicked, handleClick }) {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      onClick={handleClick}
      className={`icon nav-icon-5 ${clicked ? 'open' : ''}`}
    >
      <span />
      <span />
      <span />
    </div>
  );
}

export default BurguerButton;
