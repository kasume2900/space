import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'

const Loyaut = () => {
  return (
    <>
    <Outlet />
    <Header />
    </>
  )
}

export default Loyaut