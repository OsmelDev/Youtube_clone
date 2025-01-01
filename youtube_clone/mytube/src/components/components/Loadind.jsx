import React from "react";
import style from "./Loading.module.css";

const Loadind = () => {
  return (
    <div className={style.loading}>
      <div className={style.progress}></div>
    </div>
  );
};

export default Loadind;
