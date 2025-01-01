import React from "react";
import { RxAvatar } from "react-icons/rx";
import { SlOptionsVertical } from "react-icons/sl";

export const InitSeccion = ({ style, setOpen }) => {
  return (
    <div className={style.userMenuContainer}>
      <SlOptionsVertical id={style.menuIcons} />
      <div className={style.initSeccion} onClick={() => setOpen(true)}>
        <RxAvatar className={style.menuIcon} />
        <p>Iniciar sesion</p>
      </div>
    </div>
  );
};
