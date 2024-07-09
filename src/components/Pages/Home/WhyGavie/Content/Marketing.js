"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import {
  container,
  container2,
  container3,
  container4,
  container5,
  container6,
  container7,
  items,
} from "@/components/Animation/Motion/MotionFramer";
import Image from "next/image";

import "./style.css";
const Marketing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="inside_sidespace pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 xl:gap-6 place-content-between main_container">
      <div className="col-span-1 lg:col-span-2 gap-4 lg:gap-3 xl:gap-6 grid grid-cols-1 lg:grid-cols-2 place-content-between ">
        <motion.ul
          className=" marketing_main_item  py-[20px] px-[16px] xl:py-[32px] xl:px-[24px]"
          ref={ref}
          variants={container4}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.li variants={items}>
            <div>
              <Image
                className="mx-auto  cursor-pointer transition ease-in-out hover:scale-110"
                width={387.75}
                height={357.28}
                src="/images/content/4.png"
                alt="Marketing image"
              />
              <div className="mt-4 mb-2">
                <span className="intro_home_main text-[24px] ">
                  Improved Customer Service experience
                </span>
              </div>
              <p className="text-[16px] text-[#FFFFFFB3]">
                With instant replies, no downtime, and preset responses, the
                agent delivers faster service and enhances the customer
                experience.
              </p>
            </div>
          </motion.li>
        </motion.ul>
        <motion.ul
          className=" marketing_main_item  py-[20px] px-[16px] xl:py-[32px] xl:px-[24px]"
          ref={ref}
          variants={container5}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.li variants={items}>
            <div>
              <Image
                className="mx-auto cursor-pointer transition ease-in-out hover:scale-110"
                width={387.75}
                height={357.28}
                src="/images/content/1.png"
                alt="Marketing image"
              />
              <div className="mt-4 mb-2">
                <span className="intro_home_main text-[24px] ">
                  Improved operational efficiency{" "}
                </span>
              </div>
              <p className="text-[16px] text-[#FFFFFFB3]">
                Automating routine tasks like ticket collection, query replies,
                documentation, and call handling allows the customer service
                team to focus on more valuable activities like trend analysis
                and improving responses.
              </p>
            </div>
          </motion.li>
        </motion.ul>
        <motion.ul
          className="col-span-1 lg:col-span-2 marketing_main_item w-full py-[20px] px-[16px] xl:py-[32px] xl:px-[24px]"
          ref={ref}
          variants={container6}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.li variants={items}>
            <div>
              <Image
                className="mx-auto cursor-pointer transition ease-in-out hover:scale-110"
                width={800}
                height={800}
                src="/images/content/2.png"
                alt="Marketing image"
              />
              <div className="mt-4 mb-2">
                <span className="intro_home_main text-[24px] ">
                  Easy Integration with your existing ecosystem{" "}
                </span>
              </div>
              <p className="text-[16px] text-[#FFFFFFB3]">
                Gavie AI is designed to tie-up seamlessly with your existing
                infrastructure with the help of a set of tools and integrations.
              </p>
            </div>
          </motion.li>
        </motion.ul>
      </div>

      <motion.ul
        className="col-span-1 marketing_main_item  py-[20px] px-[16px] xl:py-[32px] xl:px-[24px]"
        ref={ref}
        variants={container7}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.li variants={items}>
          <div>
            <Image
              className="mx-auto w-[250px] md:w-[1600px] h-auto cursor-pointer transition ease-in-out hover:scale-110"
              width={800}
              height={800}
              src="/images/content/3.png"
              alt="Marketing image"
            />
            <div className="mt-4 mb-2">
              <span className="intro_home_main text-[24px] ">
                Improved operational efficiency{" "}
              </span>
            </div>
            <p className="text-[16px] text-[#FFFFFFB3]">
              Automating routine tasks like ticket collection, query replies,
              documentation, and call handling allows the customer service team
              to focus on more valuable activities like trend analysis and
              improving responses.
            </p>
          </div>
        </motion.li>
      </motion.ul>
    </div>
  );
};

export default Marketing;
