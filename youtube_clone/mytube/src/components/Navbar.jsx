import React, { useState } from "react";
import style from "./Navbar.module.css";
import { ImYoutube } from "react-icons/im";
import MenuIcon from "./components/MenuIcon";
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";
import { useAuth } from "../context/UserProvide";
import { Link } from "react-router-dom";
import { UserPanel } from "./components/UserPanel";
import { InitSeccion } from "./components/InitSeccion";

const Navbar = () => {
  const { logout } = useAuth();
  const [className, setClassName] = useState(true);
  const [active, setActive] = useState(false);
  const { isAuthenticated, setOpen, userData } = useAuth();

  function micro() {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then(function (stream) {
        alert("micro activado");
        setActive(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  function cancelMicro() {
    navigator.mediaDevices
      .getUserMedia({ audio: false })
      .then(function (stream) {
        console.log("micro desactivado");
        setActive(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className={style.navbar}>
      <div className={style.menuButtons}>
        <MenuIcon />
        <Link to="/" className={style.logo}>
          <ImYoutube />
          <p>MYTUBE</p>
        </Link>
      </div>
      <div className={style.continerSearchForm}>
        <form action="" className={style.formSearch}>
          <input type="search" placeholder="BUSCAR" name="search" />
          <button id="submit">
            <CiSearch />
          </button>
        </form>
        {isAuthenticated && (
          <button
            className={!active ? style.buttonMicro : style.buttonMicroActive}
            onClick={() => micro()}
          >
            <FaMicrophone />
          </button>
        )}
      </div>

      {isAuthenticated ? (
        <UserPanel
          userData={userData}
          className={className}
          setClassName={setClassName}
          logout={logout}
          style={style}
        />
      ) : (
        <InitSeccion style={style} setOpen={setOpen} />
      )}
    </div>
  );
};

export default Navbar;
