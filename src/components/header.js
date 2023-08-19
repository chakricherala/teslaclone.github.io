import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function header() {
  return (
    <div className='conta'>
      <a href='#'>
        <img src='/images/logo.svg' alt='#' />
      </a>
      <div className='Menu'>
        <a href='#'>Model S</a>
        <a href='#'>Model Y</a>
        <a href='#'>Model X</a>
        <a href='#'>Model 3</a>
        <a href='#'>Solar Panels</a>
        <a href='#'>Accessories</a>
      </div>
      <div className='rightmenu'>
        <a href='#'>Shop</a>
        <a href='#'>Tesla Account</a>
        <a href='#'><FontAwesomeIcon icon={faBars} /></a>
      </div>
    </div>
  )
}

export default header