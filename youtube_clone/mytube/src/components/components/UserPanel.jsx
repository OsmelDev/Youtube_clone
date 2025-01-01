import React from "react";
import MenuUser from "./menuUser";
import { Link } from "react-router-dom";
import { MdOutlineVideoCall } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";

export const UserPanel = ({
  userData,
  style,
  logout,
  className,
  setClassName,
}) => {
  return (
    <div className={style.userpanel}>
      <Link to="/upload" className={style.linkCreate}>
        <MdOutlineVideoCall />
      </Link>
      <IoIosNotificationsOutline />
      <p>{userData.posts?.length}</p>
      <img
        src={userData.imgUrl}
        alt="avatar"
        onClick={() => setClassName(!className)}
      />
      <MenuUser
        style={style}
        className={className}
        logout={logout}
        userData={userData}
      />
    </div>
  );
};
