import { click } from '@testing-library/user-event/dist/click';
import './App.css';
import Clicker from './components/Clicker/Clicker.js'
// import Notifications from './components/Notifications/Notifications.js'
import Roles from './components/Roles/Roles.js'
import Stats from './components/Stats/Stats.js'
import Upgrades from './components/Upgrades/Upgrades.js'
import React, { useState } from 'react'

function App() {
  const [number, setNumber] = useState(0);
  const [clickMultiplier, setClickMultiplier] = useState(1);
  const buyUpgrade = () => {
    // Implement logic to buy an upgrade and increase the clickMultiplier
    // For example, you can deduct some cookies and double the clickMultiplier
    const upgradeCost = 10; // Adjust the cost as needed
    if (number >= upgradeCost) {
      setNumber(number - upgradeCost);
      setClickMultiplier(clickMultiplier * 2);
    }
  };
  return (
    <div className="App">
        <Roles />
        
        <div className='rightUI'>
          <Clicker increaseNum={ () => {
            setNumber (number+clickMultiplier)
          }} />


          <Stats totalClicks={number}/>



          {/* <Notifications /> */}
          <Upgrades decreaseNum= { () => {setNumber (number-1)}}/>
        </div>
    </div>
  );
}

export default App;
