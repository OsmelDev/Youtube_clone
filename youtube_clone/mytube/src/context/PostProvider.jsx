import { createContext, useContext, useEffect, useState } from "react";
import {
  getPublicationsByCategory,
  getPublicatiosServices,
} from "../services/post.services";

export const PostContext = createContext(null);

export const usePost = () => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error("usePost must be used within an PostProvider");
  }
  return context;
};

export const PostProvider = ({ children }) => {
  const [post, setPost] = useState([]);
  const [reload, setReload] = useState(true);
  const [error, setError] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const viewPost = async () => {
      const posts = await getPublicatiosServices();

      if (posts) {
        setPost(posts.data);
      } else {
        setPost("");
      }
    };
    viewPost();
  }, [reload]);

  async function getPostByCategory(category) {
    try {
      const response = await getPublicationsByCategory(category);
      setPost(response.data);
    } catch (error) {
      setError(error.response.data.message);
      setPost([]);
    }
  }

  return (
    <PostContext.Provider
      value={{
        showMenu,
        setShowMenu,
        post,
        setReload,
        reload,
        getPostByCategory,
        error,
        data,
        setData,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
