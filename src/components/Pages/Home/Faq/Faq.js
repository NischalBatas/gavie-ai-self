
import React from 'react'
import FaqContent from './Content/FaqContent'

const Faq = () => {
  return (
    <div className="relative flex flex-col justify-center items-center w-full mt-[150px]">
    {/* <div className="second_background"></div> */}

    <div>
      <div className="mt-[100px] flex flex-col justify-center items-center w-full">
        <span className=" border text-[16px] border-[#ffffff] rounded-[32px] font-semibold py-[8px] px-[20px]">
        Frequently Asked
        </span>
      </div>
      <div className="max-w-[480px] mt-[36px]">
        <p className="intro_home_main text-wrap text-[36px] md:text-[49px] lg:tracking-[-1px] leading-[120%] text-center">
        We’ll be There When You Need us
        </p>
      </div>
    </div>

    <FaqContent/>
 

  </div>
  )
}

export default Faq