// Clicker.js
import React from 'react';

function Clicker({ setCookies }) {
  const handleCookieClick = () => {
    setCookies((prevCookies) => prevCookies + 1);
  };

  return (
    <div>
      <button onClick={handleCookieClick}>Click Me!</button>
    </div>
  );
}

export default Clicker;
