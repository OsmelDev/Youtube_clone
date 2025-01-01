import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../src/context/UserProvide";
import style from "./Profile.module.css";
import { CardProfile } from "../src/components/components/CardProfile";
import UserNavbar from "../src/components/components/UserNavbar";

const Profile = () => {
  const { userData } = useAuth();
  return (
    <div className={style.contentProfile}>
      <Link id={style.backLink} to="/">
        Atras{" "}
      </Link>

      <CardProfile userData={userData} />
      <UserNavbar userData={userData} />
    </div>
  );
};

export default Profile;
