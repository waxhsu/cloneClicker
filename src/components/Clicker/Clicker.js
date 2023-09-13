import React, { useState } from 'react' //importing react and useState
import CLICK from '../../img/easyapply.png'


export const Clicker = () => {
    const [number, setNumber] = useState(0) //this is an react hook
  return (
    <div>
        {/* <h1>CLONE CLICKER</h1> */}
        <div className='apply'>

        <img onClick = {() => setNumber(number+1)} src={CLICK} />
        <h2>Total Applications: {number}</h2>
        </div>
        <h3>Potential: {number*.0014}%</h3>
    </div>
  )
}

export default Clicker;