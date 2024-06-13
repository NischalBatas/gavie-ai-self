import React from "react";
import "../CSS/style.css";
import Marketing from "./Content/Marketing";
const WhyGavie = () => {
  return (
    <div id="whygavie" className="relative flex flex-col justify-center items-center w-full mt-[150px]">
      <div className="second_background"></div>

      <div>
        <div className="mt-[100px] flex flex-col justify-center items-center w-full">
          <span className=" border text-[16px] border-[#ffffff] rounded-[32px] font-semibold py-[8px] px-[20px]">
            WHY GAVIE.AI
          </span>
        </div>
        <div className="max-w-[550px] mt-[36px]">
          <p className="intro_home_main inside_sidespace text-wrap text-[32px] md:text-[49px] lg:tracking-[-1px] leading-[120%] text-center">
            Effortlessly Scale Your Marketing Efforts
          </p>
        </div>
      </div>

      <Marketing/>
    </div>
  );
};

export default WhyGavie;
