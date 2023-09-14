import React, { useState } from 'react' //importing react and useState
import CLICK from '../../img/billiards_back_animated.gif'
import './Upgrades.css';
import { UPGRADES } from '../../const.js';

export const Upgrades = () => {
    const [number, setNumber] = useState(0) //this is an react hook
  return (
    <div className="Upgrades">
        <h2>Productivity Store</h2>
    <div>
    <div className="upgradeGrid">
    {UPGRADES.map((upgrade) => {
        return (
            <div className='upgradeContainer'>
                    <div className='imgColumn'>
                        <img className='contentImage' src={upgrade.src} alt='' />
                    </div>
                    <div className='upgradeDetailColumn'>
                        <h2>{upgrade.name}</h2>
                        <h4>{upgrade.cost}</h4>
                    </div>
            </div>
        );
        })}




    </div>
</div>





    </div>
  )
}

export default Upgrades;