import React from "react";
import './Faq.scss';

export default function Faq(props) {
  return (
    <main className='faq'>
      <h1>Account</h1>
      <img className='faq__icon' src={process.env.REACT_APP_HOST + '/under-construction.avif'} alt='under-construction'/>
      <p>This is a demo app</p>
      <p>You should be able to view Faq on this page.</p>
    </main>
  )
}