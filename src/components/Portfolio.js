import React, {useState, useEffect, useContext} from "react";
import './Portfolio.scss';

import {UserContext} from '../context/UserContext';
import {PortfolioContext} from '../context/PortfolioContext';
import { useNavigate } from "react-router-dom";
import PortfolioCard from './PortfolioCard';


export default function Portfolio(props) {

  const userContext = useContext(UserContext);
  const portfolioContext = useContext(PortfolioContext);
  const navigate = useNavigate();

  return (    
    <main className='main'>
      <h1>Portefeuille Clients de {userContext.firstName}&nbsp;{userContext.lastName}</h1>

      {
        (portfolioContext.portfolio.length < 1) && 
        <h3>Il n'y a actuellement aucun client dans ce portefeuille</h3>
      }
      {
        (portfolioContext.portfolio.length > 0) &&
        <div className='portfolio-wrapper'>
        {
          portfolioContext.portfolio.map((client) => {
            return (
              <PortfolioCard key={client.id} client={client} onClick={() => {navigate("/books/" + client.slug, { replace: true, state: {}});}} />
            ); 
          })

        }
        </div>

      }
    </main>
  )
}