import React from 'react'
import "../CSS/style.css";
import TipsContent from './TipsContent/TipsContent';
const Tips = () => {
  return (
    <div id='insights' className="relative flex flex-col justify-center items-center w-full mt-[150px]">
    {/* <div className="second_background"></div> */}

    <div>
      <div className="mt-[100px] flex flex-col justify-center items-center w-full">
        <span className=" border text-[16px] border-[#ffffff] rounded-[32px] font-semibold py-[8px] px-[20px]">
        Insights
        </span>
      </div>
      <div className="max-w-[690px] mt-[36px]">
        <p className="intro_home_main text-wrap inside_sidespace text-[32px] md:text-[49px] lg:tracking-[-1px] leading-[120%] text-center">
        Explore Insights and Marketing Tips Here
        </p>
      </div>
    </div>

    <TipsContent/>
 

  </div>
  )
}

export default Tips