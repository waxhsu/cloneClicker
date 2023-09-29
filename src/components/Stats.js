// Stats.js
import React, { useState, useEffect } from 'react';

function Stats({ cookies }) {
  // State to track the number of upgrades
  const [upgrades, setUpgrades] = useState(0);

  // Effect to update upgrades when cookies change
  useEffect(() => {
    // Calculate upgrades based on cookies (e.g., 10 cookies for 1 upgrade)
    const newUpgrades = Math.floor(cookies / 10);
    setUpgrades(newUpgrades);
  }, [cookies]);

  return (
    <div>
      <p>Cookies: {cookies}</p>
      <p>Upgrades: {upgrades}</p>
    </div>
  );
}

export default Stats;
