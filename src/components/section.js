import React from 'react'

function Section({ title, description, leftbtn, rightbtn, backgroundImg, showArrowImage }) {
  const sectionStyle = {
    '--bg-image': `url("/images/${backgroundImg}")`,
  };
  return (
    <div className='wrap' style={sectionStyle}>
      <div className='item'>
        <h1> {title} </h1>
        <p> {description}</p>
      </div>
      <div>
        <div className='butttongrp'>
          <button className='leftbtn'> {leftbtn} </button>
          { rightbtn &&
            <button className='rightbtn leftbtn'> {rightbtn} </button>
          }
        </div>
        {showArrowImage && (
          <div className='center'>
            <img src='/images/down-arrow.svg' alt='' />
          </div>
        )}
      </div>
    </div>
  )
}



export default Section
