"use client"
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import {  container, container2,container3, container4, items } from "@/components/Animation/Motion/MotionFramer";

import "../CSS/style.css";
import Marketing from "./Content/Marketing";
const WhyGavie = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div id="whygavie" className="relative flex flex-col justify-center items-center w-full mt-[150px]">
      <div className="second_background"></div>

      <div>
      <motion.ul
        ref={ref}
    
        variants={container2}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.li variants={items}>
        <div className="mt-[100px] flex flex-col justify-center items-center w-full">
          <span className=" border text-[16px] border-[#ffffff] rounded-[32px] font-semibold py-[8px] px-[20px]">
            WHY GAVIE.AI
          </span>
        </div>
        </motion.li>
        </motion.ul>

        <motion.ul
        ref={ref}
    
        variants={container3}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.li variants={items}>
        <div className="max-w-[550px] mt-[36px]">
          <p className="intro_home_main inside_sidespace text-wrap text-[32px] md:text-[49px] lg:tracking-[-1px] leading-[120%] text-center">
            Effortlessly Scale Your Marketing Efforts
          </p>
        </div>
        </motion.li>
        </motion.ul>

      </div>

      <Marketing/>
    </div>
  );
};

export default WhyGavie;
