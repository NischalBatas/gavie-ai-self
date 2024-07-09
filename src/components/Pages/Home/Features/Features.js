"use client"
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import {  container, container2,container3, container4, items } from "@/components/Animation/Motion/MotionFramer";

import FeatureItem from './Content/FeatureItem'

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div id='featureeffort' className="relative flex flex-col justify-center items-center w-full mt-[150px]">
    <div className='inside_sidespace'>
    <motion.ul
        ref={ref}
    
        variants={container2}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.li variants={items}>
      <div className="mt-[100px] flex flex-col justify-center items-center w-full">
        <span className=" border text-[16px] border-[#ffffff] rounded-[32px] font-semibold py-[8px] px-[20px]">
        FEATURES
        </span>
      </div>
      </motion.li>
      </motion.ul>

      <motion.ul
        ref={ref}
    
        variants={container4}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.li variants={items}>
      <div className="max-w-[690px] mt-[36px]">
        <p className="intro_home_main text-wrap  text-[32px] md:text-[49px] lg:tracking-[-1px] leading-[120%] text-center">
        Effortlessly Scale Your Marketing Efforts
        </p>
      </div>
      </motion.li>
      </motion.ul>
    </div>

    <FeatureItem/>
 

  </div>
  )
}

export default Features