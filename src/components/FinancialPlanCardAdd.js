import React, {useState, useEffect, useContext} from "react";
import './FinancialPlanCardAdd.scss';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import KeyValueRead from './KeyValueRead';

import {PortfolioContext} from '../context/PortfolioContext';

export default function FinancialPlanCard(props) {

  const portfolioContext = useContext(PortfolioContext);

  return (
    <Card className='financial-plan-card-add' onClick={() => {portfolioContext.addPlan(props.bookId);}}  sx={{ Width: 275, minHeight:310 }}>
      <CardActions className='financial-plan-card-add__actions'>
        <img className='financial-plan-card-add__actions-icon' src={process.env.REACT_APP_HOST + '/add.svg'} alt='add-plan'/>
        <div>New plan</div>        
      </CardActions>
    </Card>  
  );
}