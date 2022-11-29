import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
  setFavInStorage,
  isFavorited,
  removeFavInStorage,
} from "./utils/localStorage.service";
import { ContextGlobal } from "./utils/global.context";
import styles from "./Card.module.css";

const Card = ({ nome, sobrenome, matricula, usuario }) => {
  const [favorite, setFavorite] = useState(() => isFavorited(matricula));
  const { theme } = useContext(ContextGlobal);
  const isDarkMode = theme === "dark" || false;

  const isFavorite = (favorite) => {
    setFavorite(favorite);
  };

  const addFav = () => {
    const favorite = setFavInStorage({ nome, sobrenome, matricula });
    isFavorite(favorite);
  };

  const removeFav = () => {
    const favorite = removeFavInStorage(matricula);
    isFavorite(favorite);
  };

  return (
    <div className={`card ${isDarkMode ? styles.cardDark : ""}`}>
      <img
        className="card-img-top"
        src="/images/doctor.jpg"
        alt="doctor placeholder"
      />
      <div className={`card-body ${styles.CardBody}`}>
        <Link to={`/dentist/${matricula}`}>
          <h5 className={`card-title ${styles.title}`}>{nome}</h5>
        </Link>
        <p className="card-text">{usuario?.username}</p>
        <button
          onClick={favorite ? removeFav : addFav}
          className={`btn btn-${isDarkMode ? "dark" : "light"} ${
            styles.favButton
          }`}
        >
          {favorite ? "❌ Unfavorite your Doc" : "⭐ Favorite your Doc"}
        </button>
      </div>
    </div>
  );
};

export default Card;
