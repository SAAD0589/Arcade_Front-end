import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"
import img3 from '../Imgs/img3.jpg'

export default function Register() {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  function register(event) {
    event.preventDefault();
    var data = new FormData();
    data.append("method", "register");
    data.append("name", name);
    data.append("email", email);
    data.append("password", password);
    data.append("password_confirmation", confirmPassword);
    axios.post("http://localhost:8000/api/auth/register", data);
    navigate('/login')

  }

  return (
    <form onSubmit={register}>
    <div className='body'>
      <div className='containe' style={{ backgroundImage: `url(${img3})`, backgroundRepeat: "no-repeat center" }}>
        <div className='content-box'>
          <div className='left' style={{ backgroundImage: `url(${img3})`, backgroundRepeat: "no-repeat center" }}></div>

          <div className='right'>

            <h1 className='text-white'>Sign up</h1>
            <input
              placeholder='Entre Your Name'
              className='filed'
              type="text"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />

            <input
              placeholder='Entre Your Email'
              className='filed'
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              placeholder='Entre Your Password'
              className='filed'
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

              <div className="form-field mb-1">
                <label className="form-label">Confirm Password</label>
                <input type="password" className="form-control"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <div className="form-field button">
                <button type="submit" className="">
                Sign up
                </button>
              </div>
          </div>
        </div>
      </div>
    </div>
    </form>
  );
}