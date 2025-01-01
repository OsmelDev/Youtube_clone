import React from "react";
import style from "./Sidebar.module.css";
import { GoHomeFill } from "react-icons/go";
import { BsFillCollectionPlayFill, BsSend } from "react-icons/bs";
import { VscRemoteExplorer } from "react-icons/vsc";
import {
  MdOutlineWatchLater,
  MdVideoLibrary,
  MdOutlineExpandMore,
  MdSports,
  MdOutlineSettings,
  MdReportGmailerrorred,
  MdHelpOutline,
} from "react-icons/md";
import { RiLiveLine } from "react-icons/ri";
import { SiYoutubegaming, SiGreatlearning } from "react-icons/si";
import { FaHistory, FaAngellist } from "react-icons/fa";
import { TbMovie } from "react-icons/tb";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { BsPersonVideo3 } from "react-icons/bs";
import { AiOutlineLike, AiOutlineYoutube } from "react-icons/ai";
import { Link } from "react-router-dom";
import { usePost } from "../context/PostProvider";

const Sidebar = () => {
  const { showMenu } = usePost();

  return (
    <div className={showMenu ? style.sidebarShow : style.sidebar}>
      <div className={style.sidebar_categories}>
        <Link to="/" className={style.sidebar_userCategory}>
          <GoHomeFill />
          <span>Home</span>
        </Link>
        <div className={style.sidebar_userCategory}>
          <VscRemoteExplorer />
          <span>Explore</span>
        </div>
        <div className={style.sidebar_userCategory}>
          <BsFillCollectionPlayFill />
          <span>Subscriptions</span>
        </div>
      </div>

      <div className={style.sidebar_categories}>
        <div className={style.sidebar_yourCategory}>
          <MdVideoLibrary />
          <span>Library</span>
        </div>
        <div className={style.sidebar_yourCategory}>
          <FaHistory />
          <span>History</span>
        </div>
        <div className={style.sidebar_yourCategory}>
          <BsPersonVideo3 />
          <span>Your videos</span>
        </div>
        <div className={style.sidebar_yourCategory}>
          <MdOutlineWatchLater />
          <span>Watch later</span>
        </div>
        <div className={style.sidebar_yourCategory}>
          <AiOutlineLike />
          <span>Liked videos</span>
        </div>
        <div className={style.sidebar_yourCategory}>
          <MdOutlineExpandMore />
          <span>Show more</span>
        </div>
      </div>

      <div className={style.sidebar_categories}>
        <h1 className={style.head_text}>SUBSCRIPTIONS</h1>
        <div className={style.sidebar_channelsCategory}>
          <AiOutlineYoutube />
          <span>Channel 1</span>
        </div>
        <div className={style.sidebar_channelsCategory}>
          <AiOutlineYoutube />
          <span>Channel 2</span>
        </div>
        <div className={style.sidebar_channelsCategory}>
          <AiOutlineYoutube />
          <span>Channel 3</span>
        </div>
        <div className={style.sidebar_channelsCategory}>
          <AiOutlineYoutube />
          <span>Channel 4</span>
        </div>
        <div className={style.sidebar_channelsCategory}>
          <AiOutlineYoutube />
          <span>Channel 5</span>
        </div>
        <div className={style.sidebar_channelsCategory}>
          <AiOutlineYoutube />
          <span>Channel 6</span>
        </div>
        <div className={style.sidebar_channelsCategory}>
          <AiOutlineYoutube />
          <span>Channel 7</span>
        </div>
        <div className={style.sidebar_channelsCategory}>
          <MdOutlineExpandMore />
          <span>Show more</span>
        </div>
      </div>

      <div className={style.sidebar_categories}>
        <h1 className={style.head_text}>MORE FROM YOUTUBE</h1>
        <div className={style.sidebar_youtubeCategory}>
          <TiSocialYoutubeCircular />
          <span>YouTube Premium</span>
        </div>
        <div className={style.sidebar_youtubeCategory}>
          <TbMovie />
          <span>Movies</span>
        </div>
        <div className={style.sidebar_youtubeCategory}>
          <SiYoutubegaming />
          <span>Gaming</span>
        </div>
        <div className={style.sidebar_youtubeCategory}>
          <RiLiveLine />
          <span>Live</span>
        </div>
        <div className={style.sidebar_youtubeCategory}>
          <FaAngellist />
          <span>Fashion & Beauty</span>
        </div>
        <div className={style.sidebar_youtubeCategory}>
          <SiGreatlearning />
          <span>Learing</span>
        </div>
        <div className={style.sidebar_youtubeCategory}>
          <MdSports />
          <span>Sports</span>
        </div>
      </div>

      <div className={style.sidebar_categories}>
        <Link to="/profile" className={style.sidebar_optionsCategory}>
          <MdOutlineSettings />
          <span>Settings</span>
        </Link>
        <div className={style.sidebar_optionsCategory}>
          <MdReportGmailerrorred />
          <span>Report history</span>
        </div>
        <div className={style.sidebar_optionsCategory}>
          <MdHelpOutline />
          <span>Help</span>
        </div>
        <Link to="/upload" className={style.sidebar_optionsCategory}>
          <BsSend />
          <span>Send Feedback</span>
        </Link>
      </div>

      <div className={style.sidebar_bottom_info}>
        <a href="/">About</a>
        <a href="/">Press</a>
        <a href="/">Copyright</a>
        {/* <br /> */}
        <a href="/">Contact us</a>
        <a href="/">Creators</a>
        <br />
        <a href="/">Advertise</a>
        <a href="/">Developers</a>
        {/* <br /> */}
        {/* <br /> */}
        <a href="/">Terms</a>
        <a href="/">Privacy</a>
        <a href="/">Policy & Safety</a>
        {/* <br /> */}
        <a href="/">How YouTube works</a>
        {/* <br /> */}
        <a href="/">Test new features</a>
        {/* <br /> */}
        {/* <br /> */}
        <span>© 2021 Google LLC</span>
      </div>
    </div>
  );
};

export default Sidebar;
