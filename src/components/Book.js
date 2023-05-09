import React, {useContext} from 'react';
import { useParams } from "react-router-dom";
import'./Book.scss';
import NotFound from "./NotFound";
import BookCard from "./BookCard";
import FinancialPlans from "./FinancialPlans";

import { Link } from 'react-router-dom';

import {PortfolioContext} from '../context/PortfolioContext';

import FinancialPlanModal from './FinancialPlanModal';

export default function Book(props) {
  const { slug } = useParams()
  const portfolioContext = useContext(PortfolioContext);

  const book = portfolioContext.portfolio?.find(el => el.slug === slug);

  if (!book){
    return (
      <NotFound/>
    );
  }
  else{
    return (
      <main className='book'>
        <FinancialPlanModal book={book}/>
        <div className='book__header'>
          <div className='book__header-title'>
            <Link to='/portfolio'>
              <img className='book__header-back'  src='../back.png' alt ='back-to-portfolio'/>
            </Link>
            <h1>Client&nbsp;/ {book.name}</h1>
          </div>
        </div>
        <BookCard book={book}/>
        <FinancialPlans bookId={book.id} plans={book.plans}/>
      </main>  
    );  
  }

}