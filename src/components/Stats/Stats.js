import React, { useState } from 'react' //importing react and useState



export const Stats = (props) => {
  const {totalClicks} = props;
  return (
    <div>
      <div className='appStats'>
        <h2>Total Applications: {totalClicks}</h2>
        <h3>f*cks left to give: {totalClicks*.51}</h3>
      </div>

    </div>
    
  )
}

export default Stats;