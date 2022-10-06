import React from "react";
import { Link } from "react-router-dom";
import { setFavInStorage } from "./utils/localStorage.service";
import styles from "./Card.module.css";

const Card = ({ name, username, id }) => {
  const addFav = () => {
    setFavInStorage({ name, username, id });
  }

  return (
    <div className={`${styles.card}`}>
      <img className="card-img-top" src="/images/doctor.jpg" alt="doctor placeholder" />
      <div className={`card-body ${styles.CardBody}`}>
        <Link to={`/dentist/${id}`}>
          <h5 className={`card-title ${styles.title}`}>{name}</h5>
        </Link>
        <p className="card-text">{username}</p>
        <button onClick={addFav} className="btn btn-primary favButton">⭐</button>
      </div>
    </div>
  );
};

export default Card;
