import React, { useState } from 'react';
import './App.css';
import CookieButton from './components/Apply/Apply.js';
import StatsDisplay from './components/Statsdisplay/Statsdisplay.js'; // Import the new component
import Autofarm from './components/Autofarm/Autofarm.js'; // Import the new component

function App() {
  // State to track the number of cookies and currency
  const [cookies, setCookies] = useState(0);
  const [currency, setCurrency] = useState(0);

  // Function to handle cookie clicking
  const handleCookieClick = (amount) => {
    setCookies(cookies + amount);
    if ((cookies + amount) % 10 === 0) {
      setCurrency(currency + 1);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Cookie Clicker</h1>
        {/* Use the StatsDisplay component */}
        <StatsDisplay cookies={cookies} currency={currency} />
        {/* Use the CookieButton component */}
        <CookieButton onClick={() => handleCookieClick(1)} />
        {/* Use the Autofarm component */}
        <Autofarm addCookies={handleCookieClick} />
      </header>
    </div>
  );
}

export default App;
