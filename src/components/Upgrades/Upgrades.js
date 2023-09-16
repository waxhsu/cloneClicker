import React, { useState } from 'react' //importing react and useState
import CLICK from '../../img/billiards_back_animated.gif'
import './Upgrades.css';
import { UPGRADES } from '../../const.js';
import UPGRADE from '../../img/upgrade.png'

export const Upgrades = (upgrade) => {
  const {decreaseNum} = upgrade;
  return (
    <div className="Upgrades">
        <h2>Productivity Store</h2>
    <div>
    <div className="upgradeGrid">
            <div className='upgradeContainer' onClick = {() => decreaseNum()} src={UPGRADE}>
          <div className='tryHarder'>
            <img className= 'Upgrade' src={UPGRADE} /> Try Harder 10 f*cks
          </div>
            </div>




    </div>
</div>

    </div>
  )
}

export default Upgrades;