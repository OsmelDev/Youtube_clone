import React, { useState } from "react";
import { useForm } from "react-hook-form";
import style from "./UploadPublication.module.css";
import { postServices } from "../services/post.services";
import { useAuth } from "../context/UserProvide";
import { filters } from "../constant/data";
import { Link } from "react-router-dom";
import { usePost } from "../context/PostProvider";
import Loadind from "./components/Loadind";

const UploadPublication = () => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();
  const { error, message, setError, setMessage } = useAuth();
  const { reload, setReload } = usePost();
  const [loading, setLoading] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    try {
      const response = await postServices(data);
      setLoading(true);
      setTimeout(() => {
        setMessage(response.data);
        setReload(!reload);
        reset();
        setLoading(false);
      }, 1500);
    } catch (error) {
      setLoading(true);
      setTimeout(() => {
        setError(error.response.data);
        setLoading(false);
      }, 1500);
    }
  });

  return (
    <div>
      <Link to="/" className={style.buttonBack}>
        Atras
      </Link>
      <form className={style.formContainer} onSubmit={onSubmit}>
        <div className={style.alertContainer}>
          {loading && <Loadind />}
          {message && <p className={style.message}>{message}</p>}
          {error && <span className={style.errorMessage}>{error}</span>}
        </div>

        <label htmlFor="">Nombre</label>
        <input
          type="text"
          {...register("name", {
            required: {
              value: true,
              message: "debe proporcionar un nombre",
            },
            minLength: {
              value: 5,
              message: "el nombre debe contener como minimo 5 caracteres",
            },
            maxLength: {
              value: 30,
              message: "el nombre solo puede tener hasta 30 caracteres",
            },
          })}
        />
        {errors.name && <span>{errors.name.message}</span>}

        <label htmlFor="">descripcion</label>
        <input
          type="text"
          {...register("descripcion", {
            required: {
              value: true,
              message: "este campo es requerido",
            },
            minLength: {
              value: 20,
              message: "este campo debe tener un minimo de 20 caracteres",
            },
            maxLength: {
              value: 100,
              message: "este campo solo puede tener hasta 100 caracteres",
            },
          })}
        />
        {errors.descripcion && <span>{errors.descripcion.message}</span>}

        <label htmlFor="">Categoria</label>
        <select
          name=""
          id=""
          {...register("category", {
            required: {
              value: true,
              message: "debe proporcionar un categoria",
            },
          })}
        >
          {filters.map((filter, i) => (
            <option value={filter.value} key={i}>
              {filter.name}
            </option>
          ))}
        </select>
        {errors.category && <span>{errors.category.message}</span>}

        <label htmlFor="">Video</label>
        <input
          type="file"
          onChange={(e) => {
            setValue("video", e.target.files[0]);
          }}
          id={style.file}
        />
        {message && <p>{message}</p>}

        <button>send</button>
      </form>
    </div>
  );
};

export default UploadPublication;
