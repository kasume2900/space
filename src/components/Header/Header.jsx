import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import s from './header.module.scss'
import logo from './image/logo.svg'

const Header = () => {

  const [burger,setBurger] = useState(false)

  const toogleBurger = () => {
    setBurger(!burger)
  }

  return (
    <header className={s.header}>
      <div className={s.logo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={s.line}></div>
      <div onClick={toogleBurger} className={burger ? s.burger + ' ' + s.active : s.burger}>
        <span></span>
      </div>
      <nav className={burger ? s.nav + ' ' + s.active : s.nav}>
        <ul className={s.list}>
          <li className={s.link}><span>00</span><Link to='/'>HOME</Link></li>
          <li className={s.link}><span>01</span><Link to='/destination'>DESTINATION</Link></li>
          <li className={s.link}><span>02</span><Link to='/crew'>CREW</Link></li>
          <li className={s.link}><span>03</span><Link to='/technology'>TECHNOLOGY</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header