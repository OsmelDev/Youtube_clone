import React, { useEffect, useState } from "react";
import style from "./Dmode.module.css";

const DarkModeButton = ({ setTheme }) => {
  const [swithcB, setSwitchB] = useState(localStorage.getItem("theme"));
  const [checked, setCheked] = useState(swithcB === "dark" ? false : true);
  const handleChange = (e) => {
    setSwitchB(e.target.checked ? "light" : "dark");
  };

  useEffect(() => {
    document.body.setAttribute("data-theme", swithcB);
    localStorage.setItem("theme", swithcB);
    setTheme(document.body.getAttribute("data-theme"));
  }, [swithcB]);

  return (
    <label className={style.container}>
      <input
        type="checkbox"
        defaultChecked={checked}
        className={style.checkbox_switch}
        onChange={handleChange}
        hidden
      />
      {swithcB === "light" ? (
        <b className={style.light}>Light Mode</b>
      ) : (
        <b className={style.dark}>Dark Mode</b>
      )}
    </label>
  );
};

export default DarkModeButton;
