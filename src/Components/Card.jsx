import { useContext } from 'react'
import { Link } from "react-router-dom";
import { setFavInStorage, isFavorited, removeFavInStorage } from "./utils/localStorage.service";
import { ContextGlobal } from './utils/global.context';
import styles from "./Card.module.css";

const Card = ({ name, username, id }) => {
  const { theme } = useContext(ContextGlobal)
  const isDarkMode = theme === "dark" || false

  const addFav = () => {
    setFavInStorage({ name, username, id });
  }

  const removeFav = () => {
    removeFavInStorage(id);
  }

  const favorite = isFavorited(id);

  return (
    <div className={`card ${isDarkMode ? styles.cardDark : ''}`}>
      <img className="card-img-top" src="/images/doctor.jpg" alt="doctor placeholder" />
      <div className={`card-body ${styles.CardBody}`}>
        <Link to={`/dentist/${id}`}>
          <h5 className={`card-title ${styles.title}`}>{name}</h5>
        </Link>
        <p className="card-text">{username}</p>
        <button onClick={favorite ? removeFav : addFav} className={`btn btn-${isDarkMode ? 'dark' : 'light'} ${styles.favButton}`}>{favorite ? '❌ Unfavorite your Doc' : '⭐ Favorite your Doc'}</button>
      </div>
    </div>
  );
};

export default Card;
