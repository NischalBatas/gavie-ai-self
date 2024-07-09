"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import {
  container,
  container2,
  container3,
  container4,
  container6,
  items,
} from "@/components/Animation/Motion/MotionFramer";

import FaqContent from "./Content/FaqContent";

const Faq = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div
      id="faqs"
      className="relative flex flex-col justify-center items-center w-full mt-[150px]"
    >
      {/* <div className="second_background"></div> */}

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
                Frequently Asked
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
            <div className="max-w-[480px] mt-[36px]">
              <p className="intro_home_main text-wrap inside_sidespace text-[32px] md:text-[49px] lg:tracking-[-1px] leading-[120%] text-center">
                We’ll be There When You Need us
              </p>
            </div>
          </motion.li>
        </motion.ul>
      </div>

      <motion.ul
        ref={ref}
        variants={container6}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.li variants={items}>
          <FaqContent />
        </motion.li>
      </motion.ul>
    </div>
  );
};

export default Faq;
