import Image from "next/image";
import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import Menus from "./Menu/Menu";

const Navbar = () => {
  return (
    <div className="flex items-center px-4 py-2" style={{
        "background": "#1C1C24",
"box-shadow": "0px -1px 0px 0px #292932 inset"
    }}>
     <div className="flex items-center w-[280px]">
     <Image width={100} height={100} src="/Image/dashboard/gavie.svg" alt="Gavie Logo" />
     </div>
      <div className="flex items-center justify-between w-full">
        <SearchBar />
        <Menus />
      </div>
    </div>
  );
};

export default Navbar;
