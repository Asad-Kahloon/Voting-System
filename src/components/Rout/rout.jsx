import React from 'react'
import { Routes, Route } from 'react-router-dom'
import UserInterface from '../user_interface/user_interface'
import Home from '../user_interface/home/home'
import Webcam from '../user_interface/takephoto/webcam'
import SignUp from '../user_interface/signup_form/SignUp'
import SignIn from '../user_interface/signin_form/SignIn'
import Contact from '../user_interface/contact_form/contact'

import Admin from '../admin_interface/Admin/admin'
import AHome from '../admin_interface/home/home'
import CreateElection from '../admin_interface/election/createElection'

export default function Rout() {


  return (
    <>
        <Routes>
           
           <Route path = '/' element = {< UserInterface />}>

              <Route index element = {< Home />}  />
              <Route path = 'camera' element = {< Webcam />} />
              <Route path = 'signup' element = {< SignUp />} />
              <Route path = 'login' element = {< SignIn />} />
              <Route path = 'contact' element = {< Contact />} />

           </Route>

           <Route path = '/admin' element = {< Admin />} >

              <Route index element = {< AHome />}  />
              <Route path = 'election' element = {< CreateElection />}  />

           </Route>


        </Routes>
    </>
  )
}
