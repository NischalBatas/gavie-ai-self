"use client"
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import {  container, container2,container3, container4, container5, container6, container7, container8, items } from "@/components/Animation/Motion/MotionFramer";
import Image from 'next/image'

const ItemContent = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  return (
    <div className='inside_sidespace main_container grid sm:grid-cols-2 lg:grid-cols-3 gap-6  pt-[72px]'>
        <motion.ul
        ref={ref}
    
        variants={container6}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.li variants={items}>
        <div>
            <Image className='cursor-pointer transition ease-in-out hover:scale-110' width={391.67} height={463.61} src='/images/content/7.png' alt='Item support'/>
            <Image className='mt-[50px]' width={56} height={56} src='/images/icon/3.svg' alt='Item support'/>
            <div className='max-w-[391px]'>
            <div className='mt-[32px]'>
                <span className='text-[24px] font-semibold'>Custom Conversation Journeys</span>
            </div>
            <div className='mt-[15px]'>
                <p className='text-[#FFFFFFBF] text-[16px]'>Create conversation journey for an interactive customer support experience</p>
            </div>
            </div>
        </div>
        </motion.li>
        </motion.ul>
        <motion.ul
        ref={ref}
    
        variants={container7}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.li variants={items}>
        <div>
            <Image className='cursor-pointer transition ease-in-out hover:scale-110' width={391.67} height={463.61} src='/images/content/5.png' alt='Item support'/>
            <Image className='mt-[50px]' width={56} height={56} src='/images/icon/2.svg' alt='Item support'/>
            <div className='max-w-[391px]'>
            <div className='mt-[32px]'>
                <span className='text-[24px] font-semibold'>Zero Downtime</span>
            </div>
            <div className='mt-[15px]'>
                <p className='text-[#FFFFFFBF] text-[16px]'>Powred By Gen-AI, The agents have near zero downtime, exceptional efficiency and scalability</p>
            </div>
            </div>
        </div>
        </motion.li>
        </motion.ul>

        <motion.ul
        ref={ref}
    
        variants={container8}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.li variants={items}>
        <div>
            <Image className='cursor-pointer transition ease-in-out hover:scale-110' width={391.67} height={463.61} src='/images/content/6.png' alt='Item support'/>
            <Image className='mt-[50px]' width={56} height={56} src='/images/icon/1.svg' alt='Item support'/>
            <div className='max-w-[391px]'>
            <div className='mt-[32px]'>
                <span className='text-[24px] font-semibold'>Automate Tasks</span>
            </div>
            <div className='mt-[15px]'>
                <p className='text-[#FFFFFFBF] text-[16px]'>Automate the boring and repetitive tasks such as asking for personal details, creating tickets and responding to basic quaries</p>
            </div>
            </div>
        </div>
        </motion.li>
        </motion.ul>
    </div>
  )
}

export default ItemContent