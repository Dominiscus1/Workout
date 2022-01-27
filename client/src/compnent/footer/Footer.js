import React from 'react';
import './Footer.css'

function Footer() {
  return <div className='footer d__flex align__items__center justify__content__space__between pz-10' style={{"padding":"10px 20px", "zIndex":"100"}}>
  <div className='getHelp'>
      <a style={{color:"#c6c9d8", "fontSize":"14px", "opacity": "0.75"}}>Author: Nicole Wrzoseck, Anthony Jimenez, Christopher Wishart, Quynh Dinh</a>
  </div>
  
  <span className='copyright' style={{color:"#c6c9d8", "fontSize":"14px", "opacity": "0.75"}}>Copyright @ 2021 All Rights Reserved.</span>
</div>
}

export default Footer;
