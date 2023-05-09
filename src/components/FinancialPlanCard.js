import React, {useState, useEffect, useContext} from "react";
import './FinancialPlanCard.scss';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import KeyValueRead from './KeyValueRead';

import {PortfolioContext} from '../context/PortfolioContext';


export default function FinancialPlanCard(props) {

  const portfolioContext = useContext(PortfolioContext);

  return (
    <Card className='financial-plan-card' sx={{ Width: 275, minHeight:310 }}>
      <CardActions className='financial-plan-card__actions'>
        <img className="financial-plan-card__actions-icon" onClick={() => {portfolioContext.editPlan(props.bookId, props.plan.id);}}    src={process.env.REACT_APP_HOST + '/edit.png'} alt='edit-button' />
        <img className="financial-plan-card__actions-icon" onClick={() => {portfolioContext.copyPlan(props.bookId, props.plan.id);}}    src={process.env.REACT_APP_HOST + '/copy.png'} alt='copy-button' />
        <img className="financial-plan-card__actions-icon" onClick={() => {portfolioContext.deletePlan(props.bookId, props.plan.id);}}  src={process.env.REACT_APP_HOST + '/bin.png'} alt='remove-button' />
      </CardActions>
      <CardContent className='financial-plan-card__content' >
        <h4>{props.plan.name}</h4>
        <KeyValueRead label={'LegalfForm'} text={props.plan.legalForm} />
        <KeyValueRead label={'created At'} text={props.plan.createdAt} />
        <KeyValueRead label={'modified At'} text={props.plan.modifiedAt} />
      </CardContent>
    </Card>  
  );
}