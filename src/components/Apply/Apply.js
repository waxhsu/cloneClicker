import React from 'react';
import APPLY from '../../img/apply.png'

function CookieButton({ onClick }) {
  return (
    <img
    src={APPLY}
    onClick={onClick}
    style={{ cursor: 'pointer' }}
  />
  );
}

export default CookieButton;