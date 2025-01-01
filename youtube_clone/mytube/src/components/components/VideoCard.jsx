import React from "react";
import FilePlayer from "react-player/file";
import style from "./VideoCard.module.css";

const VideoCard = ({ video, user, name, create }) => {
  return (
    <div className={style.containerInfo}>
      <div className={style.screenVideo}>
        <FilePlayer url={video} width=" 100%" height="100%" />
      </div>
      <section className={style.description}>
        <h3>{name}</h3>
        <section>
          <p>{create.substring(0, 10)}</p>
          <p>{user}</p>
        </section>
      </section>
    </div>
  );
};

export default VideoCard;
