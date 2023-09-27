import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from './sidebar';
export default function Favorite() {
  const [Fav, setFav] = useState([]);
  let user = JSON.parse(localStorage.user);
  let token = localStorage.getItem('token');
  let id = user.id_user;
  useEffect(() => {
    axios.post("http://127.0.0.1:8000/api/favg", {}, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
      .then(res => {
        setFav(res.data.flat());
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    <div className='d-flex'>
      <Sidebar></Sidebar>
      <div className="row">
        {Fav.map((a) => {
          return (
            <div class="col-sm-3 " >
              <a href={`/game/${a.id_game}`}>
                <div class="card m-3">
                  <img className="card-img-top  "
                    src={`/img/image/${a.image_game}`}
                    alt="Card image cap" />
                  <div className="card-body row">
                    <small className="text-center text-bold">
                      {a.name_game}
                    </small>
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  )
}
