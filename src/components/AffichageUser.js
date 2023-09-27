import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function AffichageUser() {
    const[user,setUser]=useState([]);

    useEffect(() => {
      (async () => await Load())();
      }, []);
     
      async function  Load()
      {
         const result = await axios.get(
             "http://127.0.0.1:8000/api/User");
             setUser(result.data);
             console.log(result.data);
      }
     
     
       async function DeleteUser(id)
       {
          
            await axios.delete("http://127.0.0.1:8000/api/User/delete/" + id);
            alert("User deleted Successfully");
            Load();
      
       }
  return (
    <div>
       <div>
       <header>
    <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-white">
      <div class="position-sticky">
        <div class="list-group list-group-flush mx-3 mt-4">
          <Link to="/AffichageAdmine" class="list-group-item list-group-item-action py-2 ripple active">
            <i class="fas fa-chart-area fa-fw me-3"></i><span>Home </span>
          </Link>
          <Link to="/AjouteGames" class="list-group-item list-group-item-action py-2 ripple"><i
              class="fas fa-lock fa-fw me-3"></i><span>Manage Games </span></Link>
          <a href="/AffichageUser" class="list-group-item list-group-item-action py-2 ripple"><i
              class="fas fa-chart-bar fa-fw me-3"></i><span>Manage Users</span></a>
        </div>
      </div>
    </nav>

    <nav id="main-navbar" class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#sidebarMenu"
          aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
          <i class="fas fa-bars"></i>
        </button>

        <a class="navbar-brand" href="#">
          <img src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png" height="25" alt="" loading="lazy" />
        </a>
        <form class="d-none d-md-flex input-group w-auto my-auto">
 
          <span class="input-group-text border-0"><i class="fas fa-search"></i></span>
        </form>

        
      </div>
    </nav>
  </header>

  <main style={{marginTop: "58px"}} >
    <div class="container pt-4">


      <section class="mb-4">
        <div class="card">
          <div class="card-header text-center py-3">
            <h5 class="mb-0 text-center">
              <strong>Utilisateur</strong>
            </h5>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-hover text-nowrap">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">Name Utilisateur</th>
                    <th scope="col">Email Utilisateur</th>
                  </tr>
                </thead>
                {user.filter((a)=>a.role===0).map((C) => 
        {
                return(
                <tbody>
                    <tr>
                    <th scope="row">{C.id_user} </th>
                    <td>{C.name}</td>
                    <td>{C.email}</td>        
                    <td>{C.password}</td>             
                    <td >
                        <button type="button" class="btn btn-danger mx-2" onClick={() => DeleteUser(C.id_user)}>Delete</button>
                    </td>
                    </tr>
                </tbody>
                );
                })}
              </table>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  </main>
    </div>
    </div>
  )
}
