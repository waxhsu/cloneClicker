import React, { useState } from 'react' //importing react and useState
import { ROLES } from '../../const.js';
import './Stats.css';

export const Stats = () => {
  return (
    <div className="Roles">
    <div className="roleGrid">
    {ROLES.map((role) => {
        return (
            <div className='roletContainer'>
                    <div className='contentOverlay' />
                    <img className='contentImage' src={role.src} alt='' />
                    <div className='contentDetails fadeInBottom'>
                    <p>{role.desc}</p>
                    </div>
                    <h2>{role.titles}</h2>
                    <h4>{role.companyName} • {role.pay}</h4>
                    <h4>{role.desc}</h4>
            </div>
        );
        })}




    </div>
</div>
  )
}

export default Stats;