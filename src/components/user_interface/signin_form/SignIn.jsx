import React, { useState} from "react";
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";

import './SignIn.css'

const SignIn = () => {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const navigate= useNavigate();
    

    const handleSubmit = (e) => {
        e.preventDefault();
    // Retrieve user data from localStorage
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the entered email and phone match any user's data
    const foundAdmin = storedUsers.find((user) => user.Email === loginEmail && user.Password === loginPassword && user.Role === 'admin');
    const foundUser = storedUsers.find((user) => user.Email === loginEmail && user.Password === loginPassword && user.Role === 'user');
        if(!loginEmail || !loginPassword ){
            alert("please fill out the form");
        }
   else if (foundUser) {
      alert('correct credentials : welcome to user panel')
      navigate('camera');

    } else if (foundAdmin) {
      alert("correct credentials : welcome to admin panel");
      navigate('/admin')
    }
    else{
        alert('invalid credentials')
    }
  }
     

    const handleChange = (setState)=>(event) =>{
                setState(event.target.value);
            }

    return(
        <div className="login_body">
        <div class="login_form_container">
            <div class="login_form">
             <h2> Login Form </h2>
            <form onSubmit={handleSubmit}>
            <div class="input_group">
            <input
            type="email"
            placeholder="email"
            className="input_text"
            value= { loginEmail }
            onChange={handleChange(setLoginEmail)}
            />
            </div>
            <div class="input_group">
                <input
                type="password"
                placeholder="password"
                className="input_text"
                value= { loginPassword }
                onChange={handleChange(setLoginPassword)}
                />
                </div>
                <div class="button_group login_button">
          <button type="submit">Login</button>
        </div>
            </form>
            <div class="below_form">
          <Link className="link">Forgot Password ?</Link>
          <Link className="link" to='signup'>SignUp</Link>
        </div>
        </div>
        </div>
        </div>
    );
};
export default SignIn;