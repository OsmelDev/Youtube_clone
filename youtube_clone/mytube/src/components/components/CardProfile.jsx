import React from "react";
import style from "./CardProfile.module.css";
import { Link } from "react-router-dom";

export const CardProfile = ({ userData }) => {
  const { email, username, createAt, updatedAt, posts, imgUrl } = userData;
  return (
    <div className={style.infoProfile}>
      <input type="image" src={imgUrl} className={style.avatar} />
      <div className={style.infoUser}>
        <p>Email: {email}</p>
        <p>Username: {username}</p>
        <p>Creado: {createAt.substr(0, [9])}</p>
        <p>Actualizado: {updatedAt.substr(0, [9])}</p>
        <p>
          Publicaciones:{" "}
          <span>
            {posts.map((post, i) => (
              <b key={i}>
                * {post.name.charAt(0).toUpperCase() + post.name.slice(1)},
              </b>
            ))}
          </span>
        </p>
        <Link id={style.updateLink} to="/update">
          Editar
        </Link>
      </div>
    </div>
  );
};
