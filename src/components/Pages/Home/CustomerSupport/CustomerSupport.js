import React from 'react'
import "../CSS/style.css";
import ItemContent from './ItemContent/ItemContent';
const CustomerSupport = () => {
  return (
    <div id='features' className="relative flex flex-col justify-center items-center w-full mt-[150px]">
      <div className="second_background"></div>

      <div>
        <div className="mt-[100px] flex flex-col justify-center items-center w-full">
          <span className=" border text-[16px] border-[#ffffff] rounded-[32px] font-semibold py-[8px] px-[20px]">
           24 hours
          </span>
        </div>
        <div className="max-w-[690px] mt-[36px]">
          <p className="intro_home_main text-wrap text-[36px] md:text-[49px] lg:tracking-[-1px] leading-[120%] text-center">
          All-in-One Solution for Customer Support Automation
          </p>
        </div>
      </div>
      <ItemContent/>

    </div>
  )
}

export default CustomerSupport