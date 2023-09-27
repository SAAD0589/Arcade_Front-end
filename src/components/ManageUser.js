import React from 'react';
import axios from 'axios';
import { useEffect, useState } from "react";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from "react-router-dom"
import AdmineNavBar from './AdmineNavBar';

function ManageUser(props) {
    const navigate = useNavigate();

    useEffect(() => {
        let user = JSON.parse(localStorage.user);
        if (user.role !== 1) {
            navigate('/')
        }
    }, [])
    const [user, setUser] = useState([]);
    useEffect(() => {
        (async () => await Load())();
    }, []);

    async function Load() {
        const result = await axios.get(
            "http://127.0.0.1:8000/api/User");
        setUser(result.data);
        console.log(result.data);
    }


    async function DeleteUser(id) {

        await axios.delete("http://127.0.0.1:8000/api/User/delete/" + id);
        alert("User deleted Successfully");
        Load();

    }


    return (
        <div >
            <AdmineNavBar />
            <h1 class="display-1 text-center text-light">Users Section</h1>

            <table class="table table-dark text-center" align="center">
                <thead>
                    <tr>
                        <th scope="col">UserId</th>
                        <th scope="col">Name</th>
                        <th scope="col">email</th>
                        <th scope="col">password</th>
                        <th scope="col">Option</th>
                    </tr>
                </thead>
                {user.filter((a) => a.role === 0).map((C) => {
                    return (
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
    );
}

export default ManageUser;