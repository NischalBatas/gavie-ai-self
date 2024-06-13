import React from 'react'
import FeatureItem from './Content/FeatureItem'

const Features = () => {
  return (
    <div id='featureeffort' className="relative flex flex-col justify-center items-center w-full mt-[150px]">
    <div>
      <div className="mt-[100px] flex flex-col justify-center items-center w-full">
        <span className=" border text-[16px] border-[#ffffff] rounded-[32px] font-semibold py-[8px] px-[20px]">
        FEATURES
        </span>
      </div>
      <div className="max-w-[690px] mt-[36px]">
        <p className="intro_home_main text-wrap text-[36px] md:text-[49px] lg:tracking-[-1px] leading-[120%] text-center">
        Effortlessly Scale Your Marketing Efforts
        </p>
      </div>
    </div>

    <FeatureItem/>
 

  </div>
  )
}

export default Features