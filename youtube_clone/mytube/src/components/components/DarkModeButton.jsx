import React, { useEffect, useState } from "react";
import style from "./Dmode.module.css";

const DarkModeButton = ({ setTheme }) => {
  const [swithcB, setSwitchB] = useState(
    localStorage.getItem("theme") === null
      ? "light"
      : localStorage.getItem("theme")
  );

  const [checked, setCheked] = useState(swithcB === "light" ? false : true);

  const handleChange = (e) => {
    setSwitchB(e.target.checked ? "dark" : "light");
  };

  useEffect(() => {
    document.body.setAttribute("data-theme", swithcB);
    let changedTheme = swithcB;
    localStorage.setItem("theme", changedTheme);
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
      {swithcB === "light" || swithcB === "null" ? (
        <b className={style.light}>Light Mode</b>
      ) : (
        <b className={style.dark}>Dark Mode</b>
      )}
    </label>
  );
};

export default DarkModeButton;
