import React, { useEffect, useState } from 'react'
import s from './DestinationPage.module.scss'

const DestinationPage = () => {

  const [state, setState] = useState(null)

  useEffect(() => {
    
  },[])

  return (
    <div className='content'>
      <div className='title_row'>
        <div className='num'>01</div>
        <div className="title">Pick your destination</div>
      </div>
      <div className="body_wrapper">
        <div className="image">
          <img src="" alt="image" />
        </div>
        <div className="body">

        </div>
      </div>
    </div>
  )
}

export default DestinationPage