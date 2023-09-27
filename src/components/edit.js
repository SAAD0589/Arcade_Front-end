import React from 'react';
import { useEffect,useState } from 'react';
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import Sidebar from './sidebar';
export default function Edit() {
    const [name, setname] = useState("");
    const [email, setEmail] = useState("");
    let token = localStorage.getItem('token');
    const navigate = useNavigate();
    function register(event){
        event.preventDefault();
          axios.post("http://localhost:8000/api/update", {name,email}, {
            headers: {
              Authorization: 'Bearer ' + token
            }
          }).then(response => {
              // handle success
              console.log(response.data);
            })
            .catch(error => {
              // handle error
              console.log(error);
            });
          navigate('/favorite')
      }


  return (
    <div className='d-flex'>
        <Sidebar/>
        <div className="row">
        <section className="section boxed singup">
      <section className="inner-section">
        <div className="container">

          <div className="">

            <form onSubmit={register}>
              <div className="">
                <label className="form-label">First name</label>
                <input type="text" className="form-control" 
                value={name}
                onChange={(e) => setname(e.target.value)}
                />
              </div>
              <div className=" ">
                <label className="form-label">Email address</label>
                <input type="email" className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-field button">
                <button type="submit" className="">
                Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </section>
  </div>
    </div>
  )
}
