// Upgrades.js
import React from 'react';

function Upgrades({ motivation, clickMultiplier, setClickMultiplier, updateMotivation }) {
  const upgradeClickMultiplier = () => {
    if (motivation >= 10) {
      // Deduct 10 motivation points and increase the click multiplier by 1
      updateMotivation(10); // Use the updateMotivation function to deduct motivation
      setClickMultiplier(clickMultiplier + 1);
    }
  };

  return (
    <div>
      <h2>Upgrades</h2>
      <p>Click Multiplier: {clickMultiplier}x</p>
      <button onClick={upgradeClickMultiplier}>Upgrade Click Multiplier (Cost: 10 Motivation)</button>
    </div>
  );
}

export default Upgrades;
