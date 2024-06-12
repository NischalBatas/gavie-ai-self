import Image from "next/image";
import React from "react";

const Join = () => {
  return (
    <div className="third_background mt-[150px]">
      {/* <div className=""></div> */}
      <div className="main_container inside_sidespace flex flex-col items-center text-center w-full h-full justify-end">
        <div className="max-w-[820px]">
          <span className="text-[72px] tracking-[-2.5px] font-semibold">Join Gavie.AI</span>
          <p className="mt-2 text-[#FFFFFFBF] text-[20px]">
            We Help enterprises leverage AI for customer support. Build engaging
            conversational agents, automate interactions, integrate CRM tools
            and create custom journeys powered by state-of-the-art LLM Models
          </p>
          <div className="flex justify-center mt-10">
            <button className="text-[16px] font-medium intro_get_btn1">
             Request a free trail
            </button>
          </div>
         
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
