import React from 'react'
import s from './homePage.module.scss'
const HomePage = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        <div className={s.row}>
          <div className={s.body}>
            <h5>SO, YOU WANT TO TRAVEL TO</h5>
            <h1>SPACE</h1>
            <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>

          </div>
          <div className={s.button}>
            <div className={s.circul}>
              <span>EXPLORE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage