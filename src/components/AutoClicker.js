// AutoClicker.js
import React from 'react';

function AutoClicker({ autoClickers, autoClickerCost, onBuyAutoClicker }) {
  return (
    <div className="autoclicker-container">
      <p>Auto Clickers: {autoClickers}</p>
      <p>Auto Clicker Cost: {autoClickerCost} cookies</p>
      <button onClick={onBuyAutoClicker}>Buy Auto Clicker</button>
    </div>
  );
}

export default AutoClicker;
