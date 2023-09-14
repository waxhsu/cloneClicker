import React, { useState } from 'react' //importing react and useState
import './Clicker.css';
import CLICK from '../../img/easyapply.png'



export const Clicker = (props) => {
  const {increaseNum} = props
  return (
    <div className='Clicker'>
        <div className='apply'>
          <img className= 'easyApply' onClick = {() => increaseNum()} src={CLICK} />
        </div>



    </div>
  )
}

export default Clicker;