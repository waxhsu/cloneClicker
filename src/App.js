import React, { useState } from 'react';
import './App.css';
import Apply from './components/Apply.js';

function App() {
  // State for the number of points
  const [points, setPoints] = useState(0);

  // Function to handle the click event
  const handleButtonClick = () => {
    // Increase the points by 1 each time the button is clicked
    setPoints(points + 1);
  };

  return (
    <div className="App">
      <h1>Incremental Clicker Game</h1>
      <p>Points: {points}</p>
      <Apply handleButtonClick={handleButtonClick} />
    </div>
  );
}

export default App;
