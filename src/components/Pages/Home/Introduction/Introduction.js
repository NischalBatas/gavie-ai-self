"use client";
import Link from "next/link";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import {  container, container2,container3, container4, items } from "@/components/Animation/Motion/MotionFramer";

const Introduction = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="initial_background"></div>

      <motion.ul
        ref={ref}
        className="max-w-[905.95px] mt-[36px]"
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.li variants={items}>
          <span className="bg-black border text-[16px] border-[#41424e] rounded-[32px] font-semibold py-[8px] px-[20px]">
            Introducing GAVIE AI
          </span>
        </motion.li>
      </motion.ul>

      <motion.ul
        ref={ref}
        className="max-w-[905.95px] mt-[36px]"
        variants={container2}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.li variants={items}>
          <p className="intro_home_main text-wrap text-[32px] md:text-[44px] lg:text-[58px] xl:text-[64px] tracking-[-2px] lg:tracking-[-4px] leading-[120%] text-center">
            AI powered Intelligent Conversations
          </p>
        </motion.li>
      </motion.ul>

      <motion.ul
        ref={ref}
        className="max-w-[696px] mt-[15px] px-2"
        variants={container3}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.li variants={items}>
          <p className="text-[#d0c2ff] text-[16px] md:text-[20px]  text-center leading-[170%]">
            We Help enterprises leverage AI for customer support. Build engaging
            conversational agents, automate interactions, integrate CRM tools
            and create custom journeys powered by state-of-the-art LLM Models
          </p>
        </motion.li>
      </motion.ul>


      <motion.ul
        ref={ref}
    
        variants={container4}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.li variants={items}>
      <div className="flex gap-4 mt-[28px]">
        <Link href="/contact-us">
          <button className="text-[14px] md:text-[16px] font-medium intro_get_btn1">
            Book A Free Demo
          </button>
        </Link>

        <Link href="/dashboard">
          <button className="text-[14px] md:text-[16px] font-medium text-[#000] intro_get_btn2">
            Dashboard
          </button>
        </Link>
      </div>
      </motion.li>
      </motion.ul>
    </div>
  );
};

export default Introduction;
