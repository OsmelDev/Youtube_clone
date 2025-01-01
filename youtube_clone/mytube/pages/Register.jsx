import React from "react";
import style from "./Register.module.css";
import { ImYoutube } from "react-icons/im";
import { useForm } from "react-hook-form";
import { useAuth } from "../src/context/UserProvide";

import { registerService } from "../src/services/user.services";
const Register = ({ show, setShow }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm();
  const { setMessage, message, setError, error } = useAuth();

  const onSubmit = handleSubmit(async (user) => {
    try {
      const response = await registerService(user);
      setMessage("Registro exitoso");
    } catch (error) {
      setError(error.response.data);
    }
  });
  return (
    <div
      className={show ? style.registerContainer : style.showRegisterContainer}
    >
      <form action="" className={style.formRegister} onSubmit={onSubmit}>
        {message && <p className={style.message}>{message}</p>}
        {error && <span className={style.errorMessage}>{error}</span>}
        <label>Username</label>
        <input
          type="text"
          {...register("username", {
            required: {
              value: true,
              message: "el username es requerido",
            },
            minLength: {
              value: 2,
              message: "El nombre debe tener al menos 2 caracteres",
            },
            maxLength: {
              value: 20,
              message: "El nombre debe tener maximo 10 caracteres",
            },
          })}
        />
        {errors.username && <span>{errors.username.message}</span>}

        <label>Correo</label>
        <input
          type="email"
          {...register("email", {
            required: {
              value: true,
              message: "el correo es requerido",
            },
            pattern: {
              value: /^[a-z0-p._%+-]+@[a-z0-9-]+\.[a-z]{2,3}$/,
              message: "correo no valido",
            },
          })}
        />
        {errors.email && <span>{errors.email.message}</span>}

        <label>Password</label>
        <input
          type="Password"
          {...register("password", {
            required: {
              value: true,
              message: "el password es requerido",
            },
            minLength: {
              value: 6,
              message: "el password debe tener al menos 6 caracteres",
            },
            maxLength: {
              value: 15,
              message: "el password debe tener un maximo de 15 caracteres",
            },
          })}
        />
        {errors.password && <span>{errors.password.message}</span>}

        <label>Confirm Password</label>
        <input
          type="Password"
          {...register("confirmPassword", {
            required: {
              value: true,
              message: "es necesario confirmar password",
            },
            validate: (value) =>
              value === watch("password") || "el password no coincide",
          })}
        />
        {errors.confirmPassword && (
          <span>{errors.confirmPassword.message}</span>
        )}
        <div className={style.fileSelect}>
          <input
            id={style.file}
            type="file"
            className={style.inputFile}
            onChange={(e) => {
              setValue("avatar", e.target.files[0]);
            }}
          />
        </div>

        <div className={style.linksContainer}>
          <button type="submit" className={style.btnRegister}>
            Register
          </button>
          <p>
            Ya tiene cuenta? <a onClick={() => setShow(!show)}>Login</a>
          </p>
        </div>
      </form>

      <div className={style.logoContainer}>
        <p>MY</p>
        <ImYoutube />
        <span>TUBE</span>
        <h1>Register</h1>
      </div>
    </div>
  );
};

export default Register;
