import React, { useState } from 'react' //importing react and useState
import './Clicker.css';
import apply from '../../img/easyapply.png'



export const Clicker = ( ) => {
  const [applications, setApplications] = useState(0);
  const [clickMultiplier, setClickMultiplier] = useState(1);

  // const handleClick = () => {
  //   setApplications(applications + 1);
  // };


  const handleClick = () => {
    setApplications(application + clickMultiplier);

  const buyUpgrade = () => {
    // Implement logic to buy an upgrade and increase the clickMultiplier
    // For example, you can deduct some cookies and double the clickMultiplier
    const upgradeCost = 10; // Adjust the cost as needed
    if (application >= upgradeCost) {
      setApplications(application - upgradeCost);
      setClickMultiplier(clickMultiplier * 2);
    }
  }
  

  
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
}


export default Clicker;