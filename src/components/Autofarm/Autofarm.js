// Autofarm.js
import React, { useEffect } from 'react';

function Autofarm({ addCookies }) {
  useEffect(() => {
    // Add 1 cookie every second
    const interval = setInterval(() => {
      addCookies(1);
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, [addCookies]);

  return (
    <div>
      <p>Autofarm: +1 cookie per second</p>
    </div>
  );
}

export default Autofarm;
