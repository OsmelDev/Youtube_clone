import React, { useEffect, useState } from "react";
import Sidebar from "../src/components/Sidebar";
import {
  getPublicationsByCategory,
  getReels,
} from "../src/services/post.services";
import ResultCart from "../src/components/components/ResultCart";
import { usePost } from "../src/context/PostProvider";
import style from "./Shorts.module.css";

const Shorts = ({ shorts }) => {
  const [data, setData] = useState([]);
  const { showMenu } = usePost();
  useEffect(() => {
    const resolv = async () => {
      const response = await getReels();
      setData(response.data);
      return;
    };
    resolv();
  }, [shorts]);
  console.log(data[0]);
  return (
    <>
      <Sidebar />
      <div
        className={showMenu ? style.shortsContainerOpen : style.shortsContainer}
      >
        {data.map((reel) => (
          <ResultCart
            video={reel.videoUrl}
            description={reel.descripcion}
            user={reel.user}
            name={reel.name}
            create={reel.createdAt}
            key={reel._id}
          />
        ))}
      </div>
    </>
  );
};

export default Shorts;
