"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import {
  container,
  container2,
  container3,
  container4,
  items,
} from "@/components/Animation/Motion/MotionFramer";
import "./style.css";
import Image from "next/image";
import Link from "next/link";
const Join = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="third_background mt-[100px] md:mt-[150px] overflow-hidden">
      {/* <div className=""></div> */}
      <div className="main_container inside_sidespace flex flex-col items-center text-center w-full h-full justify-end">
        <div className="max-w-[820px]">
          <motion.ul
            ref={ref}
            variants={container2}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.li variants={items}>
              <span className="text-[42px] md:text-[72px] tracking-[-2.5px] font-semibold">
                Join Gavie.AI
              </span>
            </motion.li>
          </motion.ul>
          <motion.ul
            ref={ref}
            variants={container3}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.li variants={items}>
              <p className="mt-2 text-[#FFFFFFBF] text-[16px] md:text-[20px]">
                We Help enterprises leverage AI for customer support. Build
                engaging conversational agents, automate interactions, integrate
                CRM tools and create custom journeys powered by state-of-the-art
                LLM Models
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
              <div className="flex justify-center mt-10">
                <Link href="/contact-us">
                  <button className="text-[16px] font-medium intro_get_btn1">
                    Request a free trail
                  </button>
                </Link>
              </div>
            </motion.li>
          </motion.ul>
        </div>

        <Image
          className="mt-24 border-[4px] border-b-0 border-[#33333a] rounded-[24px] rounded-bl-none rounded-br-none"
          width={1220}
          height={699}
          src="/images/content/dashboard2.png"
          alt="dashboard image"
        />
      </div>
    </div>
  );
};

export default Join;
