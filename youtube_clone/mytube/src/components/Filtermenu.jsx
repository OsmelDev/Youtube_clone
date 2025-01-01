import React, { useRef, useState } from "react";
import style from "./Filtermenu.module.css";
import { filters } from "../constant/data";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useAuth } from "../context/UserProvide";
import { usePost } from "../context/PostProvider";

const Filtermenu = () => {
  const ref = useRef(0);
  const [hidden, setHidden] = useState("");
  const { isAuthenticated } = useAuth();
  const {showMenu, getPostByCategory } = usePost();

  const scroll = (scrollOffset) => {
    const refCurrent = (ref.current.scrollLeft += scrollOffset);
    setHidden(refCurrent);
    return refCurrent;
  };
  return (
    <>
      {isAuthenticated ? (
        <div className={showMenu ? style.menuContainerOpen : style.menuContiner}>
          <IoIosArrowBack
            className={hidden <= 0 ? style.arrowBackHiden : style.arrowBack}
            onClick={() => {
              scroll(-300);
            }}
          />
          <IoIosArrowForward
            className={
              hidden >= 296 ? style.arrowFowardHiden : style.arrowFoward
            }
            onClick={() => {
              scroll(300);
            }}
          />
          <div className={style.buttonFilters} ref={ref}>
            {filters.map((filter, i) => (
              <button
                key={filter.name}
                className={style.btnFilts}
                onClick={() => getPostByCategory(filter.value)}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Filtermenu;
