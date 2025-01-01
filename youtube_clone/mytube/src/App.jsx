import { useEffect } from "react";
import Layout from "../pages/Layout";
import Shorts from "../pages/Shorts";
import "./App.css";
import MainContent from "./components/MainContent";
import AuthWindow from "./components/modals/AuthWindow";
import { useAuth } from "./context/UserProvide";

function App() {
  const { open } = useAuth();
  useEffect(() => {
    function changeTheme() {
      const themeDefault = localStorage.getItem("theme");
      document.body.setAttribute("data-theme", themeDefault);
    }
    changeTheme();
  }, []);
  return (
    <div className="app">
      <Layout />
      <MainContent />
      {open && <AuthWindow />}
    </div>
  );
}

export default App;
