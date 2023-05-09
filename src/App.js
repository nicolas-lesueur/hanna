import React, {useState, useEffect, useContext} from 'react';
import { useQuery } from "react-query";
//import logo from './logo.svg';
import './App.scss';

import {UserContext} from './context/UserContext';
import {PortfolioContext} from './context/PortfolioContext';
import {fetchUser, fetchPortfolio} from './api/api';

import AppHeader from './components/AppHeader.js';

import { Route, Routes } from "react-router-dom";

import Home from './components/Home';
import Account from './components/Account';
import Portfolio from './components/Portfolio';
import Faq from './components/Faq';
import Book from './components/Book';
import NotFound from './components/NotFound';
import Mails from './components/Mails';
import Notifications from './components/Notifications';

function App() {

  const userContext = useContext(UserContext);
  const portfolioContext = useContext(PortfolioContext);

  const { data: user, isLoading: isLoadingUser, isError:isErrorUser, error:errorUser } = useQuery({queryKey:'users', queryFn: () => fetchUser()});
  const { data: portfolio, isLoading: isLoadingPortfolio, isError:isErrorPortfolio, error:errorPortfolio } = useQuery(['users', user], () => fetchPortfolio(user.userId),{enabled:(user !== null && user !== undefined)});

  useEffect(() => {  
    if (user !== null && user !== undefined){
      userContext.setData(user);  
    }
  }, [user]);

  useEffect(() => {  
    if (portfolio !== null && portfolio !== undefined){
      portfolioContext.setPortfolio(portfolio);
    }
  }, [portfolio]);


  const displayContent = () => {
    if (isErrorUser || isErrorPortfolio) {
      return (
        <div className='App__container'>
          <div>Une erreur est survenue, nous mettons tout en oeuvre pour la réparer</div>
          <br/>
          <br/>
          <div>{errorUser?.message}</div>
          <br/>
          <div>{errorPortfolio?.message}</div>
          <br/>
        </div>
      );
    }  
    if (isLoadingUser || isLoadingPortfolio) {
      return (
        <div className='App__container'>
          <img height={200} width={200} src='spinner-bubble.svg' alt='spinner-bubble' />
          <br/>
          <div className='App__container-message'>Loading...</div>
        </div>
      );
    }    
    return (
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/account" element={<Account/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/books/:slug" element={<Book/>} />
        <Route path="/faq" element={<Faq/>} />
        <Route path="/mails" element={<Mails/>} />
        <Route path="/notifications" element={<Notifications/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  }


  return (
    <div className="App">
      <AppHeader/>      
      {displayContent()}  
    </div>
  );
}

export default App;
