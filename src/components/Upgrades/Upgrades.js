// Upgrades.js
import React, { useState } from 'react';
import { UPGRADES } from '../../const.js'

function Upgrades({ motivation, clickMultiplier, setClickMultiplier, updateMotivation }) {
  // State to track the number of upgrades purchased
  const [upgradeCount, setUpgradeCount] = useState(0);

  // List of available upgrades and their costs

  // Function to handle upgrading
  const handleUpgrade = (upgrade) => {
    if (motivation >= upgrade.cost) {
      // Deduct motivation and apply the upgrade
      updateMotivation(upgrade.cost);
      setClickMultiplier(clickMultiplier + upgrade.increase);
      setUpgradeCount(upgradeCount + 1);
    }
  };

  return (
    <div>
      <h2>Upgrades</h2>
      <p>Click Multiplier: {clickMultiplier}x</p>
      <p>Upgrades Purchased: {upgradeCount}</p>
      <ul>
        {UPGRADES.map((upgrade, index) => (
          <li key={index}>
            <button onClick={() => handleUpgrade(upgrade)} disabled={motivation < upgrade.cost}>
              {upgrade.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Upgrades;

