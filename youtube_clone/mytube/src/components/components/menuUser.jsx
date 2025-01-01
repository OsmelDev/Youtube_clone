import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DarkModeButton from "./DarkModeButton";
import { FaGoogle, FaSun, FaMoon } from "react-icons/fa";
import {
  MdOutlineSwitchAccount,
  MdOutlineLocationOn,
  MdKeyboardAlt,
} from "react-icons/md";
import { GoSignOut } from "react-icons/go";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { FaSackDollar } from "react-icons/fa6";
import { IoLanguage, IoSettingsOutline } from "react-icons/io5";
import { GrInsecure, GrSecure } from "react-icons/gr";
import { RiShieldUserLine } from "react-icons/ri";

const MenuUser = ({ style, className, logout, userData }) => {
  const [change, setChange] = useState(false);
  const [theme, setTheme] = useState(() =>
    document.body.getAttribute("data-theme")
  );

  const handleRestric = () => {
    setChange(!change);
  };
  return (
    <div className={className ? style.dropdown : style.show}>
      <div className={style.minicardProfile}>
        <img src={userData.imgUrl} alt="" />
        <section>
          <b>
            <small>{`${userData.name}  ${userData.lastName}`}</small>
            <span>@{userData.username}</span>
          </b>

          <a href="">View your chanel</a>
        </section>
      </div>
      <div className={style.options}>
        <div>
          <FaGoogle />
          Google Account
        </div>
        <div>
          <MdOutlineSwitchAccount />
          Cambiar Cuenta
        </div>
        <span onClick={() => logout()}>
          <GoSignOut />
          Sign out
        </span>
      </div>
      <div className={style.youtubeOptions}>
        <b>
          {" "}
          <TiSocialYoutubeCircular />
          YouTube Studio
        </b>
        <b>
          <FaSackDollar /> Purchases and memberships
        </b>
      </div>
      <div className={style.userSettings}>
        <Link to="/profile" id={style.Link}>
          <RiShieldUserLine /> Your data in YouTube
        </Link>
        <b id={style.darkMode}>
          {theme === "light" ? <FaSun /> : <FaMoon />}
          <DarkModeButton setTheme={setTheme} />
        </b>

        <b>
          {" "}
          <IoLanguage />
          Lenguaje
        </b>
        <b onClick={() => handleRestric()}>
          {change ? <GrInsecure /> : <GrSecure />}
          Restricted Mode: {change ? "off" : "on"}
        </b>
        <b>
          <MdOutlineLocationOn />
          location
        </b>
        <b>
          <MdKeyboardAlt />
          keboard shorcuts
        </b>
      </div>
      <div className={style.otherOptions}>
        <b>
          <IoSettingsOutline />
          Settings
        </b>
      </div>
    </div>
  );
};

export default MenuUser;
