import React, { useEffect, useRef, useState } from "react";
import style from "./Watch.module.css";
import { useParams } from "react-router-dom";
import { watchVideo } from "../src/services/post.services";
import FilePlayer from "react-player/file";
import Navbar from "../src/components/Navbar";
import Sidebar from "../src/components/Sidebar";
import { usePost } from "../src/context/PostProvider";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { filters } from "../src/constant/data";
import VideoCard from "../src/components/components/VideoCard";

const Watch = () => {
  const [hidden, setHidden] = useState("");
  const params = useParams();
  const [data, setData] = useState("");
  const { showMenu, getPostByCategory, post } = usePost();
  const ref = useRef(0);

  useEffect(() => {
    const id = params.id;
    async function fetchVideo(id) {
      try {
        const dataVideo = await watchVideo(id);
        setData(dataVideo.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchVideo(id);
  }, []);

  const scroll = (scrollOffset) => {
    const refCurrent = (ref.current.scrollLeft += scrollOffset);
    setHidden(refCurrent);
    return refCurrent;
  };

  return (
    <div>
      <Navbar />
      <Sidebar />
      <main className={showMenu ? style.contentOpen : style.content}>
        <article className={style.infoVideo}>
          <FilePlayer
            url={data.videoUrl}
            className={style.screenVideo}
            width=" 100%"
            height="460px"
            controls
          />
          <article>
            <p>{data.descripcion}</p>
            <div className={style.userSection}>
              <div className={style.circle}> </div>
              <b>{data.user}</b>
              <button>Subcribete</button>
            </div>
          </article>
        </article>

        <div className={style.contentResult}>
          <div
            className={showMenu ? style.menuContainerOpen : style.menuContiner}
          >
            <IoIosArrowBack
              className={hidden <= 0 ? style.arrowBackHiden : style.arrowBack}
              onClick={() => {
                scroll(-300);
              }}
            />
            <IoIosArrowForward
              className={
                hidden >= 1196 ? style.arrowFowardHiden : style.arrowFoward
              }
              onClick={() => {
                scroll(300);
              }}
            />
            <div className={style.buttonFilters} ref={ref}>
              {filters.map((filter, i) => (
                <button
                  key={filter.name}
                  className={style.btnFilts}
                  onClick={() => getPostByCategory(filter.value)}
                >
                  {filter.name}
                </button>
              ))}
            </div>
          </div>
          <div className={style.results}>
            {post.map((post) => (
              <article
                key={post._id}
                // onClick={() => handleWatch(post)}
                className={style.card}
              >
                <VideoCard
                  video={post.videoUrl}
                  user={post.user}
                  name={post.name}
                  create={post.createdAt}
                />
              </article>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Watch;
