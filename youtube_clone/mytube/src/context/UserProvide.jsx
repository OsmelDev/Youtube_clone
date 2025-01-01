import react, { useContext, createContext, useState, useEffect } from "react";
import { logoutService } from "../services/user.services";
import Cookie from "js-cookie";
import { usePost } from "./PostProvider";
import { url } from "../../config";
export const UserContext = createContext(null);

export const useAuth = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const UserProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [userData, setUserData] = useState([]);
  const [open, setOpen] = useState(false);
  const { reload, setReload } = usePost(false);
  const [shorts, setShorts] = useState(true);

  useEffect(() => {
    if (error.length > 0 || message.length > 0) {
      const timer = setTimeout(() => {
        setError("");
        setMessage("");
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [error, message]);

  useEffect(() => {
    async function checkLogin() {
      const cookie = Cookie.get();
      if (cookie.token) {
        try {
          let res;
          await fetch(`${url}/verify`, {
            credentials: "include",
          })
            .then((data) => data.json())
            .then((d) => (res = d));
          if (!res) {
            setIsAuthenticated(false);
          } else {
            setIsAuthenticated(true);
            setUserData(res);
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    checkLogin();
  }, [reload]);

  const logout = async () => {
    const response = await logoutService();
    response.status === 200 && setIsAuthenticated(false);
    setUserData([]);
    setReload(!reload);
  };

  return (
    <UserContext.Provider
      value={{
        isAuthenticated,
        open,
        setIsAuthenticated,
        setOpen,
        setError,
        setMessage,
        message,
        error,
        userData,
        setUserData,
        logout,
        shorts,
        setShorts,
        reload,
        setReload,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
