import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios";
import '../Style/StyleLogin.css'
import img1 from '../Imgs/img1.jpg'
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/auth/login', { email, password });
      localStorage.setItem('token', response.data.access_token);
      localStorage.setItem('user', JSON.stringify(response.data.user));

      let user = JSON.parse(localStorage.user);
      if (user.role == 1) {
        navigate('/admin')
      } else {
        let user = JSON.parse(localStorage.user);
        if (user.role == 1) {
          navigate('/AffichageAdmine')
        } else {
          navigate('/')
        }
      }
    }
    catch (error) {
      console.error(error);
    };
  }
  return (

    <form onSubmit={handleSubmit} className="">
      <div className='body'>
        <div className='containe' style={{ backgroundImage: `url(${img1})`, backgroundRepeat: "no-repeat center" }}>
          <div className='content-box'>
            <div className='left' style={{ backgroundImage: `url(${img1})`, backgroundRepeat: "no-repeat center" }}></div>

            <div className='right'>

              <h1 className='text-white'>Login</h1>
              <input
                placeholder='Entre Email'
                className='filed'
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                placeholder='Entre Password'
                className='filed'
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit"
                className='btn-match'>Log In </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );

}