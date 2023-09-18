// CookieButton.js
import React from 'react';
import CLICK from '../../img/apply.png'

function CookieButton({ onClick }) {
  return (
    <img src={CLICK} onClick={onClick} />
  );
}

export default CookieButton;
