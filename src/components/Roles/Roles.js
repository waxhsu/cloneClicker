import React, { useState } from 'react' //importing react and useState
import { ROLES } from '../../const.js';
import './Roles.css';

export const Stats = () => {
  return (
    <div className="Roles">
    <div className="roleGrid">
    <h2>Job Postings</h2>
    {ROLES.map((role) => {
        return (
            <div className='roleContainer'>
                    <div className='imgColumn'>
                        <img className='contentImage' src={role.src} alt='' />
                    </div>
                    <div className='roleDetailColumn'>
                        <h3>{role.title}</h3>
                        <h4>{role.companyName}</h4>
                    </div>
            </div>
        );
        })}




    </div>
</div>
  )
}

export default Stats;