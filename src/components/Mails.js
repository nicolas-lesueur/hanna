import React from "react";
import './Mails.scss';

export default function Mails(props) {
  return (
    <main className='mails'>
      <h1>Mails</h1>
      <img className='mails__icon' src={process.env.REACT_APP_HOST + '/under-construction.avif'} alt='under-construction'/>
      <p>This is a demo app</p>
      <p>You should be able to act on your mail.</p>
    </main>
  )
}