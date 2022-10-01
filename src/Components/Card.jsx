import React from "react";
import { Link } from "react-router-dom";

const Card = ({props}) => {
  const { name, username, id } = props;
  return (
    <div className="card">
        <Link to={`/post/${id}`}>
            <h3>{name}</h3>
            <p>{username}</p>
            <p>{id}</p>
        </Link>
    </div>
  );
};

export default Card;
