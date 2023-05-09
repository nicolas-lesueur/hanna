import React from "react";
import './Notifications.scss';

export default function Notifications(props) {
  return (
    <main className='notifications'>
      <h1>Notifications</h1>
      <img className='notifications__icon' src={process.env.REACT_APP_HOST + '/under-construction.avif'} alt='under-construction'/>
      <p>This is a demo app</p>
      <p>You should be able to act on your notification.</p>
    </main>
  )
}