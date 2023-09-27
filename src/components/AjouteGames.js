import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {useNavigate} from "react-router-dom"
import axios from "axios";

export default function AjouteGames() {
    const [name_game, setName_game] = useState("");
    const [link_game, setLink_game] = useState("");
    const [dateS_game, setDateS_game] = useState("");
    const [description_game, setDescription_game] = useState("");
    const [image_game, setImage_game] = useState("");
    const [id_requirement , setId_requirement ] = useState("");
    const [id_category , setId_category ] = useState("");
    const navigate = useNavigate();
  
    function AjouteGame(event){
      event.preventDefault();
      var data=new FormData();
        data.append("method","AjouteGame");
        data.append("name_game",name_game);
        data.append("link_game",link_game);
        data.append("dateS_game",dateS_game);
        data.append("description_game",description_game);
        data.append("image_game",image_game);
        axios.post("http://localhost:8000/api/AjouteGame",data);
        navigate('/login')
  
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
                <main style={{ marginTop: "58px" }}>
                    <div class="container pt-4">


                        <section class="mb-4">
                            <div class="card">
                                <div class="card-header text-center py-3">
                                    <h5 class="mb-0 text-center">
                                        <strong>Ajoute Games</strong>
                                    </h5>
                                </div>
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <form onSubmit={AjouteGame}>
                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Name Game</label>
                                                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name Game"
                                                 value={name_game}
                                                 onChange={(e) => setName_game(e.target.value)}
                                                />
                                            </div>
                                            <div class="form-group">
                                                <label for="exampleInputPassword1">Link Game</label>
                                                <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Link Game"
                                                    value={link_game}
                                                    onChange={(e) => setLink_game(e.target.value)}
                                                />
                                            </div>
                                            <div class="form-group">
                                                <label for="exampleInputPassword1">Date Sortie Game</label>
                                                <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Date Sortie Game"
                                                    value={dateS_game}
                                                    onChange={(e) => setDateS_game(e.target.value)}
                                                />
                                            </div>
                                            <div class="form-group">
                                                <label for="exampleInputPassword1">Description Game</label>
                                                <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Description Game"
                                                    value={description_game}
                                                    onChange={(e) => setDescription_game(e.target.value)}
                                                />
                                            </div>
                                            <div class="form-group">
                                                <label for="exampleInputPassword1">Image Game</label>
                                                <input type="file" class="form-control" id="exampleInputPassword1" placeholder="image_game"
                                                    value={image_game}
                                                    onChange={(e) => setImage_game(e.target.value)}
                                                />
                                            </div>
                                            <div class="form-group">
                                                <label for="exampleInputPassword1">Id Category </label>
                                                <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Id Category "
                                                    value={id_requirement}
                                                    onChange={(e) => setId_requirement(e.target.value)}
                                                />
                                            </div>
                                            <button type="submit" class="btn btn-primary my-3">Ajoute</button>
                                        </form>
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
