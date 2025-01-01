import React from "react";
import style from "./MainContent.module.css";
import ResultCart from "./components/ResultCart";
import { usePost } from "../context/PostProvider";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";

const MainContent = () => {
  const { post, error } = usePost();
  const { showMenu } = usePost();
  const navigate = useNavigate();
  function handleWatch(post) {
    navigate(`/watch/${post._id}`);
    console.log(post);
  }
  return (
    <>
      <Sidebar />
      <section className={style.contentWindow}>
        {post.length === 0 ? (
          !error ? (
            <div className={style.contentMessage}>
              <div className={style.message}>
                <h1>Busca algo para empezar</h1>{" "}
                <p>
                  Empieza a ver vídeos para que podamos crear un feed de vídeos
                  acorde a tus gustos.{" "}
                </p>
              </div>
            </div>
          ) : (
            <div className={style.contentErrorMessage}>
              <p className={style.errorMessage}>{error}</p>
            </div>
          )
        ) : (
          <div className={showMenu ? style.mainOpen : style.main}>
            {post.map((post) => (
              <article key={post._id} onClick={() => handleWatch(post)}>
                <ResultCart
                  video={post.videoUrl}
                  description={post.descripcion}
                  user={post.user}
                  name={post.name}
                  create={post.createdAt}
                />
              </article>
            ))}
          </div>
        )}
      </section>
    </>
  );
};
export default MainContent;
