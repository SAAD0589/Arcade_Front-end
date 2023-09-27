import React, {useEffect,useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHeartBroken } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
function HeartButton(props) {
  const [listfav, setlistfav] = useState([]);
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/fav")
    .then(res => {
      const test = res.data;
      setlistfav(test);
    })}, []);
    let user = JSON.parse( localStorage.user );
    let id = user.id_user;
    const [isLiked, setIsLiked] = useState();
    const idG = props.I;
    const exist = listfav.filter((e) => e.id_game == idG && e.id_user == id);
    useEffect(() => {
      if (exist.length>0) {
        setIsLiked(true);
      }else
      setIsLiked(false);}, [listfav]);
    const handleClick = () => {
    setIsLiked(!isLiked);
    if(!isLiked){
      axios.post("http://127.0.0.1:8000/api/fav",{ id: id, idG: idG });
    }
    else{
      axios.post("http://127.0.0.1:8000/api/favd",{ id: id, idG: idG });
    }
  };

  return (
    <button  className={`HeartButton  btn btn-default ${isLiked ? "swap" : ""}`} onClick={handleClick}>
      <FontAwesomeIcon icon={isLiked ? faHeart : faHeartBroken  } style={{ color: isLiked ? 'red' : 'white' }}  className="heartBTNNN" />

    </button>
  );
}

export default HeartButton;