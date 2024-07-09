import NavbarMain from "@/components/Navbar/Navbar";
import Homes from "@/components/Pages/Home/Homes";
import React from "react";

const Home = () => {
  return (
    <div className="px-1 md:px-2">
        <NavbarMain />
      <Homes/>
    </div>
  );
};

export default Home;
