import React, { useState } from 'react';
import './App.css';
import Clicker from './components/Clicker.js';

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
        
      </header>
    </div>
  );
}

export default App;