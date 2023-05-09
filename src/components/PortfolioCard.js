import React from "react";
import './PortfolioCard.scss';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function PortfolioCard(props) {
  return (
    <Card className='portfolio-card' sx={{ Width: 275, minHeight:310 }} onClick={props.onClick}>
      <CardContent className='portfolio-card__content' >
        <h3>{props.client.name}</h3>
        <img className='portfolio-card__icon' src={process.env.REACT_APP_HOST + '/' + props.client.icon} alt='client-icon'/>
      </CardContent>
    </Card>    
  )
}