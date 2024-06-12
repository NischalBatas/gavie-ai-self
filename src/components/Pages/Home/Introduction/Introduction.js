import React from "react";

const Introduction = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="initial_background"></div>
      <div>
        <span className="bg-black border text-[16px] border-[#41424e] rounded-[32px] font-semibold py-[8px] px-[20px]">Introducing GAVIE AI</span>
      </div>
      <div className="max-w-[905.95px] mt-[36px]">
        <p className="intro_home_main text-wrap text-[36px] md:text-[44px] lg:text-[58px] xl:text-[64px] tracking-[-2px] lg:tracking-[-4px] leading-[110%] text-center">AI powered Intelligent Conversations</p>
      </div>
      <div className="max-w-[696px] mt-[15px]">
        <p className="text-[#d0c2ff] text-[20px]  text-center leading-[170%]">
          We Help enterprises leverage AI for customer support. Build engaging
          conversational agents, automate interactions, integrate CRM tools and
          create custom journeys powered by state-of-the-art LLM Models
        </p>
      </div>

      <div className="flex gap-4 mt-[28px]">
      <button  className="text-[16px] font-medium intro_get_btn1">Book A Free Demo</button>
      <button  className="text-[16px] font-medium text-[#000] intro_get_btn2">Contact Us</button>

      </div>
    </div>
  );
};

export default Introduction;
