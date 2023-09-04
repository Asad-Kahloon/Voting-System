import React, { useState} from "react";
import {Link} from 'react-router-dom'
import './SignUp.css'

const SignUp = () => {


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
      <div className="signup_body">
          <div className='signup_form_container'>
                  <div className="signup_form">
                        <h2> SignUp Form </h2>
                        <form onSubmit={handleSignup}>
                              <div className="input_group">
                                    <input
                                      type="email"
                                      placeholder='Email'
                                      value={email}
                                      onChange={handleChange(setEmail)}
                                      required
                                      className="input_text"
                                    />
                              </div>
                              <div className="input_group">
                                    <input
                                      type="password"
                                      value={password}
                                      placeholder="password"
                                      onChange={handleChange(setPassword)}
                                      required
                                      className="input_text"
                                    />
                              </div>
                              <div className="input_group">
                                    <input
                                      type="tel"
                                      placeholder="Phone No"
                                      value= { phone }
                                      onChange={handleChange(setPhone)}
                                      className="input_text"
                                    />
                              </div>
                              <div className="input_group">
                                    <select
                                      value={gender}
                                      onChange={handleChange(setGender)}
                                    className="input_text signup_select"
                                    >
                                        <option value="">Selet Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                              </div>
                              <div class="button_group signup_button">
                                    <button type="submit">Register</button>
                              </div>
                          </form>
                          <div class="below_form">
                            <Link className="link">Forgot Password ?</Link>
                            <Link className="link" to='login'>Login</Link>
                          </div>
                </div>
          </div>
      </div>
    );
  };
  
  export default SignUp;


