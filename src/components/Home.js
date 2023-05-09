import React from "react";
import { Link } from 'react-router-dom';

export default function Home(props) {
  return (
    <main>
      <Link to='/portfolio'>
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
          <img width={600} src='demo.gif' alt='demo' style={{marginTop:'-3rem', marginBottom:'-3rem', zIndex:'-1'}}/>
          {/* Quick hack to fix margins for demo instead of properly cutting the gif with the gimp */}
          <h1>Demo Application</h1>
        </div>
      </Link>
    </main>
  )
}