import React, { useState } from 'react'
import { findImageTec } from '../../components/Image/Image'
import s from './TechnologyPage.module.scss'

const TechnologyPage = ({state}) => {
  const [index,setIndex] = useState(0)
  const img = findImageTec(index)

  const handleClick = (e) => {
    setIndex(Number(e.target.innerText)-1)
  }

  return (
    <div className={s.wrapper}>
      <div className={s.conteiner}>
        <div className={s.titleWrap}>
          <span>03</span>
          <h5>SPACE LAUNCH 101</h5>
        </div>
        <div className={s.row}>
          <div className={s.circulWrap}>
            {state.map((el,index) => <div onClick={handleClick} key={el.name} className={s.circul}>
              <span>{index+1}</span>
            </div>)}
          </div>
          <div className={s.body}>
            <div className={s.supTitle}>THE TERMINOLOGY…</div>
            <div className={s.title}>{state[index].name}</div>
            <p className={s.text}>{state[index].description}</p>
          </div>
          <div className={s.image}>{img}</div>
        </div>
      </div>
    </div>
  )
}

export default TechnologyPage