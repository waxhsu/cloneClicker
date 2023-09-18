// StatsDisplay.js
import React from 'react';

function StatsDisplay({ cookies, currency }) {
  return (
    <div>
      <p>Cookies: {cookies}</p>
      <p>Currency for Upgrades: {currency}</p>
    </div>
  );
}

export default StatsDisplay;
