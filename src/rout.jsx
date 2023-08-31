import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Signup from './signup'
import Login from './login'
import Home from './home'
export default function Rout() {
  return (
    <Routes>
        <Route path='/' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
    </Routes>
  )
}
