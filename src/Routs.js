import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/login';
import Home from './components/Home';
import Game from './components/game';
import Categorie from './components/Categorie';
import AffichageAdmine from './components/AfficahageAdmine';
import AffichageUser from './components/AffichageUser';
import AjouteGames from './components/AjouteGames';
import ManageUser from './components/ManageUser';
import Admin from './components/Admin';
import ManageGames from './components/ManageGames';
import CreateCategory from './components/CreateCategory';
import Requirement from './components/Requirement';
import Favorite from './components/favorite';
import Modal from './components/Modal';
import Edit from './components/edit';
export default function Routs() {
  return (
    <div>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/game/:id" element={<Game/>}/>
    <Route path="/AffichageAdmine" element={<AffichageAdmine/>}/>
    <Route path="/AffichageUser" element={<AffichageUser/>}/>
    <Route path="/AjouteGames" element={<AjouteGames/>}/>
    <Route path="/Categorie/:id" element={<Categorie/>}/>
    <Route path="/Modal" element={<Modal/>}/>
    <Route path="/favorite" element={<Favorite/>}/>
    <Route path="/edit" element={<Edit/>}/>
    <Route path="/Categorie/:id" element={<Categorie/>}/>
    <Route path="/Admin" element={<Admin/>}/>
    <Route path="/Admin/Users" element={<ManageUser></ManageUser>}/>
    <Route path="/Admin/Games" element={<ManageGames></ManageGames>}/>
    <Route path="/Admin/createCat" element={<CreateCategory></CreateCategory>}/>
    <Route path="/Admin/Requirement" element={<Requirement></Requirement>}/>
    </Routes>
    </div>
  )
}
