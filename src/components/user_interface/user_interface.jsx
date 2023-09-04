import React from 'react'
import Navbar from './navbar/navbar'
import Footer from './footer/footer'
import { Outlet } from 'react-router-dom'

export default function UserInterface() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}
