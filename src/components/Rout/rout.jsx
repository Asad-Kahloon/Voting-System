import React from 'react'
import { Routes, Route } from 'react-router-dom'
import SignUp from '../signup_form/SignUp'
import SignIn from '../signin_form/SignIn'
import Contact from '../contact_form/contact'
import WebCam from '../takephoto/webcam'
import Home from '../home/home'
import CreateElection from '../Admin/createElection'

export default function Rout() {


  return (
    <>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signup' element={<SignUp  />} />
            <Route path='/login' element={<SignIn  />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/camera' element={<WebCam />} />
            <Route path='/admin' element={<CreateElection />} />
        </Routes>
    </>
  )
}
