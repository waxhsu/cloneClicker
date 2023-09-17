import React from 'react';

function MotivationDisplay({ motivation }) {
  const roundedMotivation = motivation.toFixed(2);
  return (
    <div>
      <p>Motivation: {roundedMotivation}</p>
    </div>
  );
}

export default MotivationDisplay;
