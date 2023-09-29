import React, { useState, useEffect } from 'react';
import './App.css';
import Clicker from './components/Clicker.js';
import AutoClicker from './components/AutoClicker.js';

function App() {
  const [cookies, setCookies] = useState(0);
  const [autoCookies, setAutoCookies] = useState(0);
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Cookie Clicker</h1>
        <p>Cookies: {cookies}</p>
        <p>AutoCookies: {autoCookies}</p>
        <p>TotalCookies: {autoCookies + cookies}</p>

        <Clicker setCookies={setCookies} />
        <AutoClicker autoCookies={autoCookies} setAutoCookies={setAutoCookies} />
      </header>
    </div>
  );
}

export default App;