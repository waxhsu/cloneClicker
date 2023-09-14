import React, { useState } from 'react' //importing react and useState



export const Stats = (props) => {
  const {totalClicks} = props;
  return (
    <div>
      <div className='appStats'>
        <h2>Total Applications: {totalClicks}</h2>
        <h3>Motivation: {totalClicks*.01} fucks</h3>
      </div>

    </div>
    
  )
}

export default Stats;