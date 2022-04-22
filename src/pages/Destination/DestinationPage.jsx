import React, { useEffect, useState } from 'react'
import { findImage } from '../../components/Image/Image'
import s from './DestinationPage.module.scss'


const DestinationPage = ({ state }) => {
  
  const [index,setIndex] = useState(0)
  const img = findImage(state[index].name)
  const getPlanetInfo = (e) => {
    const arr = state.map(el => el.name.toLowerCase())
    const ind = arr.indexOf(e.target.innerText.toLowerCase())
    setIndex(ind)
  }


  useEffect(() => {
    
  },[])
  return (
    <div className={s.wrapperDest}>
      <div className={s.contentDest}>
        <div className={s.titleRow}>
          <div className={s.num}>01</div>
          <div className={s.title}>Pick your destination</div>
        </div>
        <div className={s.bodyWrapper}>
          <div className={s.image}>
            {img}
          </div>
          <div className={s.body}>
            <div className={s.bodyLink}>
              {state.map(el => <div onClick={getPlanetInfo} key={el.name} className={s.link}>{el.name}</div>)}
            </div>
            <div className={s.name}>{state[index].name}</div>
            <p className={s.text}>{state[index].description}</p>
            <div className={s.info}>
              <div className={s.colum}>
                <div className={s.distance}>AVG. DISTANCE</div>
                <div className={s.km}>{state[index].distance}</div>
              </div>
              <div className={s.colum}>
                <div className={s.time}>Est. travel time</div>
                <div className={s.days}>{state[index].travel}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DestinationPage