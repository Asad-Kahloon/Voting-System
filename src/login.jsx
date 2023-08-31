import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {

  const navigate=useNavigate();

  const [logCnic, setLogCnic] = useState('');
  const [logPhone, setLogPhone] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleChange = (setState)=>(event) =>{
        setState(event.target.value);
    }


  const handleSubmit = (e) => {
    e.preventDefault();
    // Retrieve user data from localStorage
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the entered email and phone match any user's data
    const foundUser = storedUsers.find((user) => user.Cnic === logCnic && user.phone === logPhone);

    if (foundUser) {
      setIsLoggedIn(true);
      navigate('/home');

    } else {
      setIsLoggedIn(false);
      alert("invalid credentials");
    }
  }

    // Optionally, you can display a login success or failure message
  

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} >
        <input 
            type="tel"
            placeholder='CNIC HERE'
            required
            value={logCnic}
            onChange={handleChange(setLogCnic)}
         />
         <input 
            type="tel"
            placeholder='phone here'
            required
            value={logPhone}
            onChange={handleChange(setLogPhone)}
         />
         <button type='submit'>Login</button>
      </form>
    </div>
  )
  }
