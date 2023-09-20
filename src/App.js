import React, { useState } from 'react';
import './App.css';

function App() {
  // State to track the number of cookies
  const [cookies, setCookies] = useState(0);

  // Function to handle cookie clicking
  const handleCookieClick = () => {
    // Increase the number of cookies by 1 when clicked
    setCookies(cookies + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Cookie Clicker</h1>
        <p>Cookies: {cookies}</p>
        <button onClick={handleCookieClick}>Click Me!</button>
      </header>
    </div>
  );
}

export default App;
