import React, { useState } from "react";
import Navbar from "../src/components/Navbar";
import Filtermenu from "../src/components/Filtermenu";


const Layout = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div>
      <Navbar />
      <Filtermenu />
    </div>
  );
};

export default Layout;
