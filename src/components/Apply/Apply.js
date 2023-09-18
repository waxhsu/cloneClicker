import React from 'react';
import './Apply.css'
import APPLY from '../../img/apply.png'

function CookieButton({ onClick }) {
  return (
    <img
    className='apply'
    src={APPLY}
    onClick={onClick}
    style={{ cursor: 'pointer' }}
  />
  );
}

export default CookieButton;