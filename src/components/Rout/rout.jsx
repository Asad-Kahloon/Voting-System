import React, {useState} from 'react'
import { Routes, Route } from 'react-router-dom'
import SignUp from '../signup_form/SignUp'
import SignIn from '../signin_form/SignIn'
import Contact from '../contact_form/contact'
import WebCam from '../takephoto/webcam'
import Home from '../home/home'

export default function Rout() {


  const [savedUserData, setSavedUserData] = useState([]);

  const handleSuccessfulSignup = (userData) => {
    // Update the savedUserData state with the new user's data
    setSavedUserData([...savedUserData, userData]);
    console.log('Signup successful', userData);
  };


  return (
    <>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signup' element={<SignUp handleSuccessfulSignup={handleSuccessfulSignup} />} />
            <Route path='/login' element={<SignIn savedUserData={savedUserData} />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/camera' element={<WebCam />} />
        </Routes>
    </>
  )
}
