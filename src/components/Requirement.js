import React from 'react';
import {useEffect, useState } from "react";
import axios from 'axios';
import {useNavigate} from "react-router-dom"
function Requirement(props) {
    const [cpu,setCPU]=useState('');
const [gpu,setGPU]=useState('');
const [memory,setMemory]=useState('');
const [vram,setVram]=useState('');
const [storage,setStorage]=useState('');
const navigate = useNavigate();
    async function save(event)
    {
        event.preventDefault();
    try
        { 
     
        await axios.post("http://127.0.0.1:8000/api/Requirement/save",
           {
              CPU:cpu,
              GPU:gpu,
              Memory:memory,
              VRAM:vram,
              Storage:storage,
        });
        setCPU('');
        setGPU('');
        setMemory('');
        setVram('');
        setStorage('');
        navigate('/admin/Games')
        
        }
    catch(err)
        {
          alert("Game Registation Failed");
        }
   }
    return (
        <div>
            <form>
            <div class="row py-4 ">
                      <div class="col-sm-6">
                        <input type="text" class="form-control" id="CPU" placeholder='CPU'
                          value={cpu}
                          onChange={(event) =>
                            {
                              setCPU(event.target.value);        
                            }}
                        />
                      </div>
                      <div class="col-sm-6"> 
                        <input type="text" class="form-control" id="GPU" placeholder='GPU'
                          value={gpu}
                          onChange={(event) =>
                            {
                              setGPU(event.target.value);        
                            }}
                        />
                      </div>
                </div>
                <div class="row">
                      <div class="col-sm-4">
                        <input type="text" class="form-control" id="Memory" placeholder='Memory'
                          value={memory}
                          onChange={(event) =>
                            {
                              setMemory(event.target.value);        
                            }}
                        />
                      </div>
                      <div class="col-sm-4">
                        <input type="text" class="form-control" id="VRAM" placeholder='Vram'
                          value={vram}
                          onChange={(event) =>
                            {
                              setVram(event.target.value);        
                            }}
                        />
                      </div>
                      <div class="col-sm-4">
                        <input type="text" class="form-control" id="Storage" placeholder='Storage'
                          value={storage} 
                          onChange={(event) =>
                            {
                              setStorage(event.target.value);        
                            }}
                        />
                      </div>
                      <span class="col-sm-6"><button   class="btn btn-dark mt-4 w-100"  onClick={save}>Add</button></span>
                </div>
            </form>
        </div>
    );
}

export default Requirement;