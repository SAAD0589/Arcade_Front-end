import { useEffect, useState } from 'react';
import axios from 'axios';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { useParams } from "react-router-dom"
import '../Style/loading.css';
import { useNavigate } from "react-router-dom"
import '../Style/gamesStyle.css';
import Footer from './Footer';
import HeartButton from "./Heart";
import Navbr from './Navbr';
import video1 from '../Video/gta5.mkv';
import video4 from '../Video/assassinscreedodyssey.mkv';
import Popup from './Popups';
function Game(props) {
    const [Games, setGames] = useState([]);

    const [idUser, setIdUser] = useState('');
    const navigate = useNavigate();
    const [Requirement, setRequirement] = useState([])
    const [idGa, setidG] = useState("tt");
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/allGames")
            .then(res => {
                const test = res.data;
                setGames(test);

            })
    }, []);
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/Requirement")
            .then(res => {
                const test = res.data;
                setRequirement(test);

            })
    }, []);

    const content = [
        {
            id: 1,
            video: video1
        },
        {
            id: 2,
            video: 'video2'
        },
        {
            id: 3,
            video: 'video3'
        },
        {
            id: 4,
            video: video4
        }
    ];
    const id = useParams().id;
    const myGame = Games.filter(e => e.id_game === parseInt(id));
    const gameContents = content.filter(a => a.id === parseInt(id));

    const a = myGame.length > 0 ? myGame[0].id_game : null;
    useEffect(() => {
        if (myGame.length > 0) {
            setidG(myGame[0].id_game);
        }
    }, [myGame]);
    const reqGame = myGame.map(e => e.id_requirement)
    const RequirementOfTheGame = Requirement.filter(e => e.id_requirement === parseInt(reqGame))
    const token = localStorage.getItem('token');

    const handleD = () => {
        if (token) {
            let user = JSON.parse(localStorage.user);
            let id = user.id_user;
            const idG = myGame[0].id_game;
            axios.post("http://127.0.0.1:8000/api/download", { id, idG });
            myGame.map((a) =>
                window.open(a.link_game, '_blank'));
        }
        else {
            alert('you need to register')
        }
    };
    console.log(RequirementOfTheGame)
    if (myGame.length > 0) {
        localStorage.setItem('id_game', myGame[0].id_game)
        console.log(myGame[0].id_game);
    }

    return (
        <div class="text-light">
            <Navbr />
            {myGame.map((a) => {
                return (
                    <div class=" my-5 py-5  ">
                        <div class="container">
                            <div class='row justify-content-between'>
                                <div class="col-sm-7 ">
                                    <div class="">
                                        <img className="img-fluid rounded" src={`/img/unique_img/${a.image_game}`} alt="Card image cap" />
                                    </div>
                                    {/* <div>
                                        <video className="video-player" src={gameContents[0].video} controls />
                                    </div> */}
                                </div>
                                <div class="col-sm-5 ">
                                    <div class="p-2 ">
                                        <div class="row">
                                            <p class="col-sm-10 h2"> {a.name_game}</p>
                                            <span class="col-sm-2">
                                                {/* <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                                            </svg> */}
                                                {token ? <HeartButton I={idGa} /> : null}
                                            </span>

                                        </div>

                                        <br></br>
                                        <p>{a.description_game}</p>
                                        <div>
                                            <p>
                                                <span class="text-secondary">release year :</span> <span class="text-danger">{a.dateS_game}</span> <br></br>
                                                <span ><span class="text-secondary ">Storage :</span> <span class="text-danger">50 gb</span> </span> <br></br>
                                                <span ><span class="text-secondary ">categorie : </span> <span class="text-danger">action</span> </span>
                                            </p>
                                            <hr></hr>
                                            <button class="btn btn-danger w-100 " onClick={handleD}> download</button>


                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
            <div class="bg1 py-5 ">
                <div class="container">
                    <div class="requirement ">
                        <p class="h3 text-center">System requirements</p>
                        <table class="table my-5 table-dark table-striped text-bold">
                            <tbody class="text-center">
                                {RequirementOfTheGame.map(e => {
                                    return (
                                        <>
                                            <tr>
                                                <td><span class="text-secondary">Système d'exploitation </span></td>
                                                <td>Windows 10 - April 2018 Update (v1803)</td>
                                            </tr>
                                            <tr>
                                                <td><span class="text-secondary">Processeur </span></td>
                                                <td>{e.CPU}</td>
                                            </tr>
                                            <tr>
                                                <td><span class="text-secondary">Memory RAM </span></td>
                                                <td>{e.VRAM} GB de mémoire</td>
                                            </tr>
                                            <tr>
                                                <td><span class="text-secondary">Graphiques</span></td>
                                                <td>{e.GPU}</td>
                                            </tr>
                                            <tr>
                                                <td><span class="text-secondary">Réseau </span></td>
                                                <td>Connexion internet haut débit</td>
                                            </tr>
                                            <tr>
                                                <td><span class="text-secondary">Espace disque </span></td>
                                                <td>{e.Storage} GB d'espace disque disponible</td>
                                            </tr>
                                            <tr>
                                                <td><span class="text-secondary">Carte son </span></td>
                                                <td>Direct X Compatible</td>
                                            </tr>
                                        </>
                                    )
                                })}
                            </tbody>
                        </table>
                        <Popup />
                    </div>
                </div>
            </div>
            <Footer></Footer>

        </div>
    );
}

export default Game;