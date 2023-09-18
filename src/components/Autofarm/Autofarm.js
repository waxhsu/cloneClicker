import React, { useEffect } from 'react';

function AutoFarm({ autoMultiplier, addCookies }) {
  useEffect(() => {
    // Define an interval to add cookies based on the autoMultiplier
    const autoFarmInterval = setInterval(() => {
      addCookies(autoMultiplier);
    }, 1000); // Adjust the interval time as needed (e.g., 1000ms = 1 second)

    // Clean up the interval when the component unmounts
    return () => clearInterval(autoFarmInterval);
  }, [autoMultiplier, addCookies]);

  return <div></div>; // This component doesn't render anything visible
}

export default AutoFarm;