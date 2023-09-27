import React from 'react'
import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import { useNavigate } from "react-router-dom"

import '../Style/Modal.css';

export default function Popups() {
  //Variable De Popups
  const [isOpen, setIsOpen] = useState(false);
  const [description_comment, setDescription] = useState('');

  const navigate = useNavigate();

  const token = localStorage.getItem('token');



  function report(event) {
    event.preventDefault();
    let user;
    if (localStorage.user) {
      user = JSON.parse(localStorage.user);
      console.log(user.id_user);
    } else {
      console.log('No user found in localStorage.');
    }
    let d = description_comment;
    let g = JSON.parse(localStorage.getItem('id_game'));
    let u = user.id_user;
    axios.post('http://localhost:8000/api/auth/repport', {
      description_comment: d,
      id_user: g,
      id_game: u
    }, {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    })
      .then(response => {
        console.log(response.data);
        setIsOpen(false);
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <div>
      {token ?
        <div>
          <button onClick={() => setIsOpen(true)}>Report Games</button>
          <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
            <h2>Report Games</h2>
            <form onSubmit={report}>
              <div className="form-group">
                <label htmlFor="description-input">Description Comment</label>
                <textarea value={description_comment} class="form-control" id="exampleFormControlTextarea1" rows="3" required
                  onChange={(e) => setDescription(e.target.value)} placeholder="Description Comment">

                </textarea>
              </div>
              <button type="submit" className="btn btn-primary my-2">Submit</button>
            </form>
            <button onClick={() => setIsOpen(false)}>Close Report</button>
          </Modal>
        </div>
        : null
      }
    </div>
  );
}