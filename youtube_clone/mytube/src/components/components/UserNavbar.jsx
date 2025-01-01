import React from "react";
import style from "./UserNavbar.module.css";
const UserNavbar = ({ userData }) => {
  return (
    <div className={style.userMenu}>
      <div className={style.menuButtons}>
        <button>post</button>
        <button>videos</button>
        <button>chanels</button>
      </div>
    </div>
  );
};

export default UserNavbar;
