import React, { useState, useEffect } from 'react';
import './App.css';
import Clicker from './components/Clicker.js';
import AutoClicker from './components/AutoClicker.js';

function App() {
  const [cookies, setCookies] = useState(0);

  const handleCookieClick = () => {
    setCookies(cookies + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Cookie Clicker</h1>
        <Clicker onClick={handleCookieClick} cookies={cookies} />
        <AutoClicker cookies={cookies} setCookies={setCookies} />
      </header>
    </div>
  );
}

export default App;