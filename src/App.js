import React, { useState } from 'react';
import './App.css';
import CookieButton from './components/Apply/Apply.js';
import StatsDisplay from './components/Statsdisplay/Statsdisplay.js'; // Import the new component

function App() {
  // State to track the number of cookies and currency
  const [cookies, setCookies] = useState(0);
  const [currency, setCurrency] = useState(0);

  // Function to handle cookie clicking
  const handleCookieClick = () => {
    // Increase the number of cookies by 1 when clicked
    setCookies(cookies + 1);

    // Increase the currency by 1 for every 10 cookies clicked
    if ((cookies + 1) % 10 === 0) {
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
        <CookieButton onClick={handleCookieClick} />
      </header>
    </div>
  );
}

export default App;
