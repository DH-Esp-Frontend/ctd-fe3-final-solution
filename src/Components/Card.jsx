import React from "react";
import { Link } from "react-router-dom";
import { setFavInStorage } from "./utils/localStorage.service";




const Card = ({ name, username, id }) => {

  const addFav = ()=>{
      setFavInStorage({ name, username, id })
      alert("Dentist added successfully")
  }

  return (
    <div className="card">
        <Link to={`/dentist/${id}`}>
            <h3>{name}</h3>
        </Link>
            <p>{username}</p>
            <p>{id}</p>
        <button onClick={addFav} className="favButton">⭐</button>
    </div>
  );
};

export default Card;
