import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom"
function CreateCategory(props) {
    const [cat,setCat]=useState('');
    const navigate=useNavigate();
    async function save(event)
    {
        event.preventDefault();
    try
        {
         await axios.post("http://127.0.0.1:8000/api/Categorie/save",
        {
          genre_category:cat,
        });
          alert("Category has been added Successfully");
          setCat("")
          navigate('/admin/Games')
          
        
        }
    catch(err)
        {
          alert("Categorie Registation Failed");
        }
   }
    return (
        <div>
            <form encType='multipart/form-data'>
              <div class="form-group py-3">
                <label>category Name: </label>
                <input  type="text" class="form-control" id="genre_category"
                 value={cat}
                  onChange={(event) =>
                    {
                        setCat(event.target.value);      
                    }}
                />
                <span class="col-sm-6"><button   class="btn btn-dark mt-4 w-100"  onClick={save}>Add</button></span>
              </div>
            </form>
        </div>
    );
}

export default CreateCategory;