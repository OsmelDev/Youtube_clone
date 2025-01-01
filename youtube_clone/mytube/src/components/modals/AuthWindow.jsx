import React, { useState } from "react";
import style from "./AuthWindow.module.css";
import Login from "../../../pages/Login";
import Register from "../../../pages/Register";
import { useAuth } from "../../context/UserProvide";

const AuthWindow = () => {
  const { setOpen } = useAuth();
  const [show, setShow] = useState(false);

  return (
    <div className={style.formContainer}>
      <button
        className={style.btnClose}
        onClick={() => {
          setOpen(false);
        }}
      >
        X
      </button>
      <Login show={show} setShow={setShow} />
      <Register show={show} setShow={setShow} />
    </div>
  );
};

export default AuthWindow;
