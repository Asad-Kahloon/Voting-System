import React, { useState} from "react";
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import './SignUp.css'

const SignUp = () => {

  const navigate= useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState("");
    const [gender, setGender] = useState("");
    const [user, setUser] = useState([]);

  
    const handleSignup = (e) => {
      e.preventDefault();
      


      const newUser = {
            Email: email,
            Phone: phone,
            Password:password,
            Gender:gender,
            Role:'user',
          };
          setUser((prevUser) => [...prevUser, newUser]);
          localStorage.setItem('users', JSON.stringify([...user, newUser]));
          
  
          setEmail('');
          setPhone('');
          setPassword('')
      
    };
  
    const handleChange = (setState)=>(event) =>{
      setState(event.target.value);
  }
  
    return (
      <div className='container signup-main-container'>
        <div className="signup-main">
        <h2>SignUp Form</h2>
        <form className='signup-form' onSubmit={handleSignup}>
          <input
            type="email"
            placeholder='Email'
            value={email}
            onChange={handleChange(setEmail)}
            required
          />
          <input
            type="password"
            value={password}
            placeholder="password"
            onChange={handleChange(setPassword)}
            required
          />
           <input
            type="tel"
            placeholder="Phone No"
            value= { phone }
            onChange={handleChange(setPhone)}
          />
           <select
            value={gender}
           onChange={handleChange(setGender)}
            >
            <option value="">Selet Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
             value<option value="other">Other</option>
            </select>
  
          <br />
          <button className="signup-btns" type="submit">Sign Up</button>
          <p>Already have an account? <Link className="link" to='/login'>Login</Link></p>
        </form>
        </div>
      </div>
    );
  };
  
  export default SignUp;


