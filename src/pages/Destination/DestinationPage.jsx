import React, { useEffect, useState } from 'react'
import s from './DestinationPage.module.scss'
import f from '../../assets/destination/image-moon.png'
const DestinationPage = ({data}) => {
  console.log(data[0].images.png);
  return (
    <div className='content'>
      <div className='title_row'>
        <div className='num'>01</div>
        <div className="title">Pick your destination</div>
      </div>
      <div className="body_wrapper">
        <div className="image">
          <img src={data[0].images.png} alt="image" />
        </div>
        <div className="body">
          
        </div>
      </div>
    </div>
  )
}

export default DestinationPage