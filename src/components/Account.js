import React from "react";
import './Account.scss';
import AccountCard from './AccountCard';

export default function Account(props) {
  return (
    <main className='account'>
      <h1>Account</h1>
      <AccountCard/>
      <img className='account__icon' src={process.env.REACT_APP_HOST + '/under-construction.avif'} alt='under-construction'/>
      <p>This is a demo app</p>
      <p>You should be able to view and edit your parameters and preferences on this page.</p>
    </main>
  )
}