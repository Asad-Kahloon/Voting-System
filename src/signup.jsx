import React, { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom';


export default function Signup() {
   const navigate = useNavigate();


    const [userCnic, setUserCnic] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const [user, setUser] = useState([]);


    const handleChange = (setState)=>(event) =>{
        setState(event.target.value);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();

      

        if(!userCnic || !userPhone){
            alert('please fill the form first');
        }
        else{
          const newUser = {
            Cnic: userCnic,
            phone: userPhone
          };
          setUser((prevUser) => [...prevUser, newUser]);
          localStorage.setItem('users', JSON.stringify([...user, newUser]));
  
          setUserCnic('');
          setUserPhone('');
            // navigate('/login');
        }

    }



  return (
    <div>
      <h1>SignUp</h1>
      <form onSubmit={handleSubmit} >

    <input
     type="tel"
      value={userCnic}
       placeholder='Enter Your ID Number'
        required
        onChange={handleChange(setUserCnic)}
     />
     <input 
        type='tel'
        value={userPhone}
        placeholder='Enter Phone Number'
        required
        onChange={handleChange(setUserPhone)}
    />
    <button type='submit'>
        REgister
    </button>
    <Link to='/login'><button>Login</button></Link>


      </form>
      <h2>Registered Users</h2>
      <ul>
        {user.map((user, index) => (
          <li key={index}>
            Email: {user.Cnic}, Phone: {user.phone}
          </li>
        ))}
      </ul>
    </div>
  )
}
