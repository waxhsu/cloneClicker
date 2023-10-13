import React, { useState } from 'react';
import { autoClickerOptions } from '../const.js'

function AutoClicker({ points, setPoints, autoClickers, setAutoClickers }) {
  // Function to handle purchasing AutoClickers
  const purchaseAutoClicker = (autoClicker) => {
    if (points >= autoClicker.cost) {
      setPoints(points - autoClicker.cost);
      setAutoClickers([...autoClickers, autoClicker]);
      autoClicker.cost *= 1.1; // Scale up the cost for the next purchase
    }
  };

  return (
    <div>
      <h2>AutoClickers</h2>
      <ul>
        {autoClickerOptions.map((autoClicker) => (
          <li key={autoClicker.id}>
            <p>{autoClicker.name}</p>
            <p>Cost: {autoClicker.cost} points</p>
            <p>Clicks per second: {autoClicker.clicksPerSecond}</p>
            <button onClick={() => purchaseAutoClicker(autoClicker)}>
              Purchase
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AutoClicker;