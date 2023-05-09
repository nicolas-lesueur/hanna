import React from 'react';
import './BookCard.scss';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import KeyValueRead from './KeyValueRead';

export default function BookCard({book}) {

  return (
    <Card className='book-card'>
      <CardActions className='book-card__actions'>
        <Button size="small">Edit</Button>
      </CardActions>
      <CardContent className='book-card__content' >
        <div className="book-card__company">
          <KeyValueRead label={'Siret'} text={book.siret} />
          <KeyValueRead label='Created at' text={book.createdAt} />
          <KeyValueRead label='Country' text={book.siret} />
          <KeyValueRead label='City' text={book.city} />
        </div>
        <div className="book-card__main-contact">
          <KeyValueRead label='Contact person' text={ [book.firstContact.firstName, book.firstContact.lastName].filter(Boolean).join(", ")} />
          <KeyValueRead label='Email' text={book.firstContact.email} />
          <KeyValueRead label='Phone number' text={book.firstContact.phoneNumber} />
        </div>
        <div className="book-card__second-contact">
          <KeyValueRead label='Second Contact person' text={[book.secondContact.firstName, book.secondContact.lastName].filter(Boolean).join(", ")} />
          <KeyValueRead label='Email' text={book.secondContact.email} />
          <KeyValueRead label='Phone number' text={book.secondContact.phoneNumber} />
        </div>
      </CardContent>
    </Card>    
  )
}
