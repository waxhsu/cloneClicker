import logo from './logo.svg';
import './App.css';
import Clicker from './components/Clicker/Clicker.js'
import Notifications from './components/Notifications/Notifications.js'
import Roles from './components/Roles/Roles.js'
import Stats from './components/Stats/Stats.js'
import Upgrades from './components/Upgrades/Upgrades.js'
import React, { useState } from 'react'

function App() {
  const [number, setNumber] = useState(0)
  return (
    <div className="App">
        <Roles />
        
        <div className='rightUI'>
          <Clicker increaseNum={ () => {
            setNumber (number+1)
          }} />
          <Stats totalClicks={number} />
          {/* <Notifications /> */}
          <Upgrades />
        </div>
    </div>
  );
}

export default App;
