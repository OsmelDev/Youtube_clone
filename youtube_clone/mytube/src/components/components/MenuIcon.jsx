import React from "react";
import style from "./MenuIcon.module.css";
import { usePost } from "../../context/PostProvider";
const MenuIcon = () => {
  const { showMenu, setShowMenu } = usePost();

  return (
    <div
      className={style.menu}
      onClick={() => {
        setShowMenu(!showMenu);
      }}
    >
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default MenuIcon;
