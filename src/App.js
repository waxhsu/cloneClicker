// import { click } from '@testing-library/user-event/dist/click';
import './App.css';
// import Clicker from './components/Clicker/Clicker.js'
// import Notifications from './components/Notifications/Notifications.js'
// import Roles from './components/Roles/Roles.js'
// import Stats from './components/Stats/Stats.js'
// import Upgrades from './components/Upgrades/Upgrades.js'
import React, { useState } from 'react'
import apply from './img/easyapply.png'

const App = () => {
  const [applications, setApplications] = useState(0);

  const handleClick = () => {
    setApplications(applications + 1);
  };

  return (
    <div>
      <h1>You Got Laid Off</h1>
      <div className="app-container">
        <img
          src={apply} // Replace with the path to your cookie image
          onClick={handleClick}
          className="apply"
        />
      </div>
      <div className="application-count">
        <h1>Total Applications: {applications}</h1>
      </div>
    </div>
  );
};

export default App;
