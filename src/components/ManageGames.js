import React from 'react';
import axios from 'axios';
import { useEffect, useState } from "react";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from "react-router-dom"
import AdmineNavBar from './AdmineNavBar';

function ManageGames(props) {
  const navigate = useNavigate();

  useEffect(() => {
    let user = JSON.parse(localStorage.user);
    if (user.role !== 1) {
      navigate('/')
    }
  }, [])
  const [IdGame, setIdGame] = useState("");
  const [Name_game, setName_game] = useState('');
  const [Link_game, setLink_game] = useState("");
  const [DateS_game, setDateS_game] = useState("");
  const [Description_game, setDscription_game] = useState("");
  const [Image_game, setImage_game] = useState(null);
  const [id_requirement, setId_requirement] = useState('');
  const [Id_category, setId_category] = useState('1');
  const [Games, setGames] = useState([]);
  const [Requirement, setRequirement] = useState([]);
  const [Categorie, setCategorie] = useState([]);
  const [genre_category, setGenre_category] = useState("");
  const [cpu, setCPU] = useState('');
  const [gpu, setGPU] = useState('');
  const [memory, setMemory] = useState('');
  const [vram, setVram] = useState('');
  const [storage, setStorage] = useState('');
  useEffect(() => {
    (async () => await Load())();
  }, []);
  useEffect(() => {
    (async () => await LoadReq())();
  }, []);
  useEffect(() => {
    (async () => await LoadCat())();
  }, []);
  async function LoadCat() {
    const result = await axios.get(
      "http://127.0.0.1:8000/api/Categorie");
    setCategorie(result.data);
    //console.log(result.data);
  }
  async function LoadReq() {
    const result = await axios.get(
      "http://127.0.0.1:8000/api/Requirement");
    setRequirement(result.data);
    //console.log(result.data);
  }

  async function Load() {
    const result = await axios.get(
      "http://127.0.0.1:8000/api/Games");
    setGames(result.data);
    //    console.log(result.data);
  }

  async function save(event) {
    event.preventDefault();
    //console.log(cpu,gpu,memory,vram,storage)
    //console.log(Description_game)
    //console.log(Name_game,Link_game,DateS_game,Image_game,id_requirement)
    //console.log(id_requirement)
    try {

      await axios.post("http://127.0.0.1:8000/api/Game/save",
        {
          name_game: Name_game,
          link_game: Link_game,
          dateS_game: DateS_game,
          description_game: Description_game,
          image_game: Image_game,
          genre_category: genre_category,
          CPU: cpu,
          GPU: gpu,
          Memory: memory,
          VRAM: vram,
          Storage: storage,



        });
      alert("Game has been added Successfully");
      setIdGame('');
      setName_game("");
      setLink_game("");
      setDateS_game("");
      setDscription_game("");
      setImage_game("");
      setGenre_category("");
      setCPU('');
      setGPU('');
      setMemory('');
      setVram('');
      setStorage('');


    }
    catch (err) {
      alert("Game Registation Failed");
    }
  }

  async function editCard(C) {
    setIdGame(C.id_game);
    setName_game(C.name_game);
    setLink_game(C.link_game);
    setDateS_game(C.dateS_game);
    setDscription_game(C.description_game);
    setImage_game(C.image_game);
    const myReq = Requirement.filter(e => e.id_requirement === C.id_requirement);
    setCPU(myReq.map(e => e.CPU));
    setGPU(myReq.map(e => e.GPU));
    setMemory(myReq.map(e => e.Memory));
    setVram(myReq.map(e => e.VRAM));
    setStorage(myReq.map(e => e.Storage));
    const myCateg = Categorie.filter(e => e.id_category === C.id_category);
    setGenre_category(myCateg.map(e => e.genre_category));
    setId_category(C.id_category);
    setId_requirement(C.id_requirement);
  }
  async function DeleteCard(id) {

    await axios.delete("http://127.0.0.1:8000/api/Game/delete/" + id);
    alert("Game deleted Successfully");
    Load();

  }


  async function update(event) {
    event.preventDefault();
    try {
      const memoryValue = parseInt(memory);
      const vramValue = parseInt(vram);
      const storageValue = parseInt(storage);

      await axios.post("http://127.0.0.1:8000/api/Game/update/" + Games.find(u => u.id_game === IdGame).id_game || IdGame,
        {
          id_game: IdGame,
          name_game: Name_game,
          link_game: Link_game,
          dateS_game: DateS_game,
          description_game: Description_game,
          image_game: Image_game,
          id_requirement: id_requirement,
          id_category: Id_category,
          genre_category: genre_category,
          CPU: cpu,
          GPU: gpu,
          Memory: memoryValue,
          VRAM: vramValue,
          Storage: storageValue,
        });
      alert("Registation Updated");
      setIdGame('');
      setName_game("");
      setLink_game("");
      setDateS_game("");
      setDscription_game("");
      setImage_game("");
      setId_requirement("");
      setId_category("");
      setGenre_category("");
      setCPU('');
      setGPU('');
      setMemory('');
      setVram('');
      setStorage('');
      Load();
    }
    catch (err) {
      if (err.response) {
        // The request was made and the server responded with a status code that falls out of the range of 2xx
        alert("Game update failed: " + err.response.data.message);
      } else if (err.request) {
        // The request was made but no response was received
        alert("Game update failed: No response received");
      } else {
        // Something happened in setting up the request that triggered an Error
        alert("Game update failed  setting up: " + err.message);
      }
    }

  }
  // const MatchCategorys =()=>{
  //     const isCatInDb = Categorie.filter(e=>e.genre_category.toLowerCase().replace(/\s/g, "")===inputcategory.toLowerCase().replace(/\s/g, ""))
  //     useEffect(() => {
  //         if (isCatInDb.some((e) => e.id_category)) {
  //             setCatStatement("Found");
  //             isCatInDb.map(e=>setId_category(e.id_category));
  //             console.log(Id_category)
  //           } else {
  //             setCatStatement("Not Found");
  //           }
  //         }, [inputcategory]);
  // }
  // MatchCategorys()
  return (
    <div class="text-light">
      <AdmineNavBar />
      <h1 class="display-1 text-center">Game Section</h1>
      <div class="container my-5" >
        <form encType='multipart/form-data'>
          <div class="form-group py-3">
            <input type="text" class="form-control" id="id_game" hidden
              value={IdGame}
              onChange={(event) => {
                setIdGame(event.target.value);
              }}

            />
            <label>Game name: </label>
            <input type="text" class="form-control" id="name_game"
              value={Name_game}
              onChange={(event) => {
                setName_game(event.target.value);
              }}
            />
          </div>
          <div class="form-group py-3">
            <label>download link : </label>
            <input type="text" class="form-control" id="link_game"
              value={Link_game}
              onChange={(event) => {
                setLink_game(event.target.value);
              }}
            />
          </div>

          <div class="form-group py-3">
            <label>release year : </label>
            <input type="text" class="form-control" id="dateS_game"
              value={DateS_game}
              onChange={(event) => {
                setDateS_game(event.target.value);
              }}
            />
          </div>

          <div class="form-group py-3">
            <label>game description</label>
            <textarea type="text" class="form-control" id="description_game"
              value={Description_game}
              onChange={(event) => {
                setDscription_game(event.target.value);
              }}></textarea>
          </div>

          {/* <div class="form-group py-3">
                <label>Game image </label>
                <input  type="file" class="form-control" id="image_game"
                onChange={(event) =>
                  {
                    setImage_game(event.target.value);      
                  }}
                />
                <input readOnly type="text" class="form-control" id="image_game"
                  value={Image_game}
                onChange={(event) =>
                  {
                    setImage_game(event.target.value);      
                  }}
                />
              </div> */}
          <div class="form-group py-3">
            <label>Categorie </label>
            <input type="text" class="form-control" id="id_category"
              value={genre_category}
              onChange={(event) => {
                setGenre_category(event.target.value);
              }}
            />
          </div>
          <div class="form-group py-3">
            <label>requirement </label>
            <div class="row py-4 ">
              <div class="col-sm-6">
                <input type="text" class="form-control" id="CPU" placeholder='CPU'
                  value={cpu}
                  onChange={(event) => {
                    setCPU(event.target.value);
                  }}
                />
              </div>
              <div class="col-sm-6">
                <input type="text" class="form-control" id="GPU" placeholder='GPU'
                  value={gpu}
                  onChange={(event) => {
                    setGPU(event.target.value);
                  }}
                />
              </div>
            </div>
            <div class="row">
              <div class="col-sm-4">
                <input type="text" class="form-control" id="Memory" placeholder='Memory'
                  value={memory}
                  onChange={(event) => {
                    setMemory(event.target.value);
                  }}
                />
              </div>
              <div class="col-sm-4">
                <input type="text" class="form-control" id="VRAM" placeholder='Vram'
                  value={vram}
                  onChange={(event) => {
                    setVram(event.target.value);
                  }}
                />
              </div>
              <div class="col-sm-4">
                <input type="text" class="form-control" id="Storage" placeholder='Storage'
                  value={storage}
                  onChange={(event) => {
                    setStorage(event.target.value);
                  }}
                />
              </div>
            </div>
          </div>



          <div class="row">
            <span class="col-sm-6"><button class="btn btn-dark mt-4 w-100" onClick={save}>Add</button></span>
            <span class="col-sm-6"><button class="btn btn-light btn-outline-dark mt-4 w-100" onClick={update}>Update</button></span>

          </div>
        </form>
      </div>
      <table class="table table-dark text-center" align="center">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Link</th>
            <th scope="col">Release date</th>
            <th scope="col">Game description</th>
            <th scope="col">Images</th>
            <th scope="col">Requirement</th>
            <th scope="col">quategorie</th>
            <th scope="col">Option</th>
          </tr>
        </thead>
        {Games.map((C) => {
          return (
            <tbody>
              <tr>
                <th scope="row">{C.id_game} </th>
                <td>{C.name_game}</td>
                <td>{C.link_game}</td>
                <td>{C.dateS_game}</td>
                <td>{C.description_game}</td>
                <td>{C.image_game}</td>
                <td>{C.id_requirement}</td>
                <td>{C.id_category}</td>

                <td >
                  <button type="button" class="btn btn-warning" onClick={() => editCard(C)} >Edit</button>
                  <button type="button" class="btn btn-danger mx-2" onClick={() => DeleteCard(C.id_game)}>Delete</button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default ManageGames;