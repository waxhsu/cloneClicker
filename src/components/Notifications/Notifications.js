import React, { useState } from 'react' //importing react and useState
import './Notifications.css';
import { NOTIFICATIONS } from '../../const.js';

export const Notifications = () => {
  return (
    <div className="Notifications">
    <div className="notifGrid">
    {NOTIFICATIONS.map((notif) => {
        return (
            <div className='notifContainer'>
                    <div className='contentImageColumn'>
                        <img className='iconImage' src={notif.src} alt='' />
                    </div>
                    <div className='notifDetailColumn'>
                        <h2>{notif.title}</h2>
                        <h4>{notif.desc}</h4>
                    </div>
            </div>
        );
        })}




    </div>
</div>
  )
}

export default Notifications;