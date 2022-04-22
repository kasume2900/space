import React, { useState } from 'react'
import { findImageCrew } from '../../components/Image/Image'
import s from './CrewPage.module.scss'
const CrewPage = ({state}) => {

  const [index, setIndex] = useState(0)
  const img = findImageCrew(index)


  const handleClick = (e) => {
    setIndex(Number(e.target.innerText))
    
  }

  return (
    <div className={s.wrapper}>
      <div className={s.conteiner}>
        <div className={s.titleWrap}>
          <span>02</span>
          <h5>Meet your crew</h5>
        </div>
        <div className={s.body}>
          <div className={s.supName}>{state[index].role}</div>
          <div className={s.name}>{state[index].name}</div>
          <p className={s.text}>{state[index].bio}</p>
        </div>
        <div className={s.dotsWrap}>
          {state.map((el,ind) => <div onClick={handleClick} key={el.name} className={s.dot}><span>{ind}</span></div> )}
        </div>
        <div className={s.image}>{img}</div>
      </div>
    </div>
  )
}

export default CrewPage