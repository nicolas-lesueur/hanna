import React, {useContext} from 'react';
import './AccountCard.scss';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import KeyValueRead from './KeyValueRead';

import {UserContext} from '../context/UserContext';

export default function AccountCard({book}) {

  const userContext = useContext(UserContext);

  return (
    <Card className='account-card'>
      <CardActions className='account-card__actions'>
        <Button size="small">Edit</Button>
      </CardActions>
      <CardContent className='account-card__content' >
        <div className="account-card__company">
          <KeyValueRead label={'user Id'} text={userContext.userId} />
          <KeyValueRead label={'email'} text={userContext.email} />
          <KeyValueRead label={'firstName'} text={userContext.firstName} />
          <KeyValueRead label={'lastName'} text={userContext.lastName} />
          <KeyValueRead label={'language'} text={userContext.language} />
          <KeyValueRead label={'theme'} text={userContext.theme} />
        </div>
      </CardContent>
    </Card>    
  )
}
