import React from 'react';
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbr from './Navbr';
import Footer from './Footer';
function Categorie(props) {
    const id = useParams().id;
    const [Games,setGames]=useState([]);
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/allGames")
        .then(res => {
          const test = res.data;
          setGames(test);
        })
        },[]);
        const myGames = Games.filter(e => e.id_category === parseInt(id));
        console.log(myGames)
    return (
        <div> 
             <Navbr/>
            <div class="my-5 pt-5">
                <div class="container ">
                    <div class="row">
              {myGames.map((a) => {
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
            </div>
            <Footer></Footer>
        </div>
    );
}



export default Categorie;