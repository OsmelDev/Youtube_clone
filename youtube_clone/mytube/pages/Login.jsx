import React from "react";
import style from "./Login.module.css";
import { ImYoutube } from "react-icons/im";
import { useForm, useWatch } from "react-hook-form";
import { loginServices } from "../src/services/user.services";
import { useAuth } from "../src/context/UserProvide";

const Login = ({ show, setShow }) => {
  const {
    setError,
    error,
    setMessage,
    message,
    setUserData,
    setIsAuthenticated,
    setOpen,
  } = useAuth();
  const { register, handleSubmit } = useForm();
  const onSubmit = handleSubmit(async (dataUser) => {
    try {
      const response = await loginServices(dataUser);
      setMessage("Iniciando seccion");
      setUserData(response.data);
      setTimeout(() => {
        setOpen(false);
        setIsAuthenticated(true);
      }, 2000);
    } catch (error) {
      setError(error.response.data);
    }
  });
  return (
    <div className={show ? style.showLoginContainer : style.loginContainer}>
      <div className={style.logoContainer}>
        <p>MY</p>
        <ImYoutube />
        <span>TUBE</span>
        <h1>Login</h1>
      </div>
      <form action="" className={style.formLogin} onSubmit={onSubmit}>
        {message && <p className={style.message}>{message}</p>}
        {error && <span className={style.errorMessage}>{error}</span>}
        <label htmlFor="">Correo</label>
        <input
          type="email"
          {...register("email", {
            required: {
              value: true,
              message: "the email is required",
            },
          })}
        />

        <label htmlFor="">Password</label>
        <input
          type="Password"
          {...register("password", {
            required: {
              value: true,
              message: "the password is required",
            },
          })}
        />

        <div className={style.linksContainer}>
          <button type="submit" className={style.btnLogin}>
            Login
          </button>
          <p onClick={() => setShow(!show)}>
            No tienes cuenta aun?
            <a>Registrate</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
