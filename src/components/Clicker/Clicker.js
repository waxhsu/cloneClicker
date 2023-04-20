import React, { useState } from 'react' //importing react and useState
import CLICK from '../../img/billiards_back_animated.gif'


export const Clicker = () => {
    const [number, setNumber] = useState(0) //this is an react hook
  return (
    <div>
        <h1>CLONE CLICKER</h1>
        <img onClick = {() => setNumber(number+1)} src={CLICK} />
        <h2>{number}</h2>
    </div>
  )
}

export default Clicker;