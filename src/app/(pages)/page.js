import NavbarMain from "@/components/Navbar/Navbar";
import Homes from "@/components/Pages/Home/Homes";
import React from "react";

const Home = () => {
  return (
    <div className="">
      <NavbarMain />
      <div className="px-1 md:px-2">
      <Homes />
      </div>
    </div>
  );
};

export default Home;
