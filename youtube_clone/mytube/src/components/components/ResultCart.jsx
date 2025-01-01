import React from "react";
import style from "./ResultCart.module.css";
import FilePlayer from "react-player/file";
const ResultCart = ({ video, description, user, name, create }) => {
  return (
    <div className={style.containerInfo}>
      <FilePlayer
        url={video}
        className={style.screenVideo}
        width=" 100%"
        height="60%"
      />
      <section className={style.description}>
        <p>{name}</p>
        <p>{description}</p>
        <p>{create.substring(0, 10)}</p>
        <p>{user}</p>
      </section>
    </div>
  );
};

export default ResultCart;
