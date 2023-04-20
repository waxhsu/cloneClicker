import React, { useState } from 'react' //importing react and useState


export const Clicker = () => {
    const [number, setNumber] = useState(0) //this is an react hook
  return (
    <div>CLONE CLICKER
        <div>
            <button onClick={() => setNumber(number+50)}>PLUS 50</button>
        <div onClick = {() => setNumber(number+1)}> 
            {number}
            </div>
        <div>
            <button onClick={() => setNumber(number-50)}>MINUS 50</button></div>
        </div>
    </div>
  )
}

export default Clicker;