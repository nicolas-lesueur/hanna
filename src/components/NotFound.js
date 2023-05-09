import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {

  return (
    <main style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
      <h1>La page que vous demandez est introuvable</h1>
      <Link to="/">Retourner à l'accueil</Link>
    </main>
  )
}