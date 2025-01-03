import React, { useState } from "react";
import style from "./Edit.module.css";
import { useForm } from "react-hook-form";
import { updateService } from "../src/services/user.services";
import { Link } from "react-router-dom";
import { useAuth } from "../src/context/UserProvide";
import { FaAngleLeft } from "react-icons/fa";

const Edit = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { message, setMessage, error, setError, reload, setReload } = useAuth();
  const onSubmit = handleSubmit(async (user) => {
    try {
      const response = await updateService(user);
      setMessage(response.data);
      setReload(!reload);
    } catch (error) {
      setError(error.response.data);
    }
  });

  return (
    <div className={style.container}>
      <form action="" onSubmit={onSubmit} className={style.updateForm}>
        {message && <p id={style.message}>{message}</p>}
        {error && <b id={style.error}>{error}</b>}
        <label htmlFor=""> Name</label>
        <input
          type="text"
          {...register("name", {
            required: {
              value: true,
              message: "el nombre es requerido",
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
        <label htmlFor=""> Last Name</label>
        <input
          type="text"
          {...register("lastName", {
            required: {
              value: true,
              message: "el apellido es requerido",
            },
            minLength: {
              value: 2,
              message: "El apellido debe tener al menos 2 caracteres",
            },
            maxLength: {
              value: 20,
              message: "El apellido debe tener maximo 10 caracteres",
            },
          })}
        />

        <label htmlFor=""> Email</label>
        <input
          type="email"
          {...register("email", {
            required: {
              value: true,
              message: "el email es requerido",
            },
            pattern: {
              value: /^[a-z0-p._%+-]+@[a-z0-9-]+\.[a-z]{2,3}$/,
              message: "correo no valido",
            },
          })}
        />
        <input type="submit" id={style.button} />
      </form>

      <Link id={style.profileLink} to="/profile">
        <FaAngleLeft />
        Atras
      </Link>
    </div>
  );
};

export default Edit;
