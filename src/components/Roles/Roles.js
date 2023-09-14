import React, { useState } from 'react' //importing react and useState
import { ROLES } from '../../const.js';
import './Roles.css';

export const Stats = () => {
  return (
    <div className="Roles">
    <div className="roleGrid">
    {ROLES.map((role) => {
        return (
            <div className='roleContainer'>
                    <div className='imgColumn'>
                        <img className='contentImage' src={role.src} alt='' />
                    </div>
                    <div className='roleDetailColumn'>
                        <h2>{role.title}</h2>
                        <h4>{role.companyName} • {role.pay}</h4>
                        <h4>{role.desc}</h4>
                    </div>
            </div>
        );
        })}




    </div>
</div>
  )
}

export default Stats;