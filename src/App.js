import React, { useState } from 'react';
import './App.css';
import ApplyButton from './components/Apply/Apply.js'; 

import MotivationDisplay from './components/Stats/Stats.js';
import Upgrades from './components/Upgrades/Upgrades.js'; 
import AutoFarm from './components/Autofarm/Autofarm.js';



function App() {
  const [Apps, setApps] = useState(0);
  const [motivation, setMotivation] = useState(0);
  const [clickMultiplier, setClickMultiplier] = useState(1);
  const [autoMultiplier, setAutoMultiplier] = useState(1);
  const addApps = (amount) => {
    setApps(Apps + amount);
  };
  

  const handleApplyClick = () => {
    // Increase the number of cookies based on the click multiplier
    setApps(Apps + clickMultiplier);
    // Increase motivation based on the number of cookies clicked (e.g., 10 motivation for every 100 cookies)
    if ((Apps + 1) % 1 === 0) {
      setMotivation(motivation + 0.82);
    }
  };

  // Function to update motivation when upgrades are purchased
  const updateMotivation = (cost) => {
    if (motivation >= cost) {
      setMotivation(motivation - cost);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>You Got Laid Off</h1>
        <p>Total Applications: {Apps}</p>


        <ApplyButton 
          onClick={handleApplyClick} 
        />
        
        <MotivationDisplay
          motivation={motivation} 
        />
        
        <Upgrades
          motivation={motivation}
          clickMultiplier={clickMultiplier}
          setClickMultiplier={setClickMultiplier}
          updateMotivation={updateMotivation} // Pass the updateMotivation function
          setAutoMultiplier={setAutoMultiplier} // Pass setAutoMultiplier function
          autoMultiplier={autoMultiplier} // Pass autoMultiplier state
        />

        <AutoFarm 
          autoMultiplier={autoMultiplier}
          addCookies={addApps}
        />

      </header>
    </div>
  );
}

export default App;