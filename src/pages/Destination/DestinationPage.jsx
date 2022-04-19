import React, { useEffect, useState } from 'react'
import { findImage } from '../../components/Image/Image'


const DestinationPage = ({ state }) => {
  const img = findImage(state[0].name)
  return (
    <div className='wrapperDest'>
      <div className='contentDest'>
        <div className='title_row'>
          <div className='num'>01</div>
          <div className="title">Pick your destination</div>
        </div>
        <div className="body_wrapper">
          <div className="image">
            {img}
          </div>
          <div className="body">
            <div className="body_link">
              <div className="link">moon</div>
              <div className="link">mars</div>
              <div className="link">europa</div>
              <div className="link">titan</div>
            </div>
            <div className='name'>MOON</div>
            <p className='text'>See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
            <div className='info'>
              <div className="colum">
                <div className="distance">AVG. DISTANCE</div>
                <div className="km">384,400 km</div>
              </div>
              <div className="colum">
                <div className="time">Est. travel time</div>
                <div className="days">3 days</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DestinationPage