import React from 'react';

function Clicker({ onClick, cookies }) {
  return (
    <div>
      <p>Cookies: {cookies}</p>
      <button onClick={onClick}>Click Me!</button>
    </div>
  );
}

export default Clicker;
