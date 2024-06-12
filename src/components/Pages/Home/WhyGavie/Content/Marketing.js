import Image from "next/image";
import React from "react";
import './style.css'
const Marketing = () => {
  return (
    <div className="inside_sidespace pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 xl:gap-6 place-content-between main_container">
      <div className="col-span-1 lg:col-span-2 gap-4 lg:gap-3 xl:gap-6 grid grid-cols-1 lg:grid-cols-2 place-content-between ">

       <div className=" marketing_main_item  py-[20px] px-[16px] xl:py-[32px] xl:px-[24px]">
          <Image className="mx-auto  cursor-pointer transition ease-in-out hover:scale-110"
            width={387.75}
            height={357.28}
            src="/images/content/4.png"
            alt="Marketing image"
          />
          <div className="mt-4 mb-2">
          <span className="intro_home_main text-[24px] ">Improved Customer Service experience</span>
          </div>
          <p className="text-[16px] text-[#FFFFFFB3]">
            With instant replies, no downtime, and preset responses, the agent
            delivers faster service and enhances the customer experience.
          </p>
        </div>

        <div className="marketing_main_item  py-[20px] px-[16px] xl:py-[32px] xl:px-[24px]">
          <Image className="mx-auto cursor-pointer transition ease-in-out hover:scale-110"
            width={387.75}
            height={357.28}
            src="/images/content/1.png"
            alt="Marketing image"
          />
          <div className="mt-4 mb-2">
          <span className="intro_home_main text-[24px] ">Improved operational efficiency </span>
          </div>
          <p className="text-[16px] text-[#FFFFFFB3]">
          Automating routine tasks like ticket collection, query replies, documentation, and call handling allows the customer service team to focus on more valuable activities like trend analysis and improving responses.
          </p>
        </div>

        <div className="col-span-1 lg:col-span-2 marketing_main_item w-full py-[20px] px-[16px] xl:py-[32px] xl:px-[24px]">
          <Image className="mx-auto cursor-pointer transition ease-in-out hover:scale-110"
            width={800}
            height={800}
            src="/images/content/2.png"
            alt="Marketing image"
          />
          <div className="mt-4 mb-2">
          <span className="intro_home_main text-[24px] ">Easy Integration with your existing ecosystem </span>
          </div>
          <p className="text-[16px] text-[#FFFFFFB3]">
          Gavie AI is designed to tie-up seamlessly with your existing infrastructure with the help of a set of tools and integrations. 
          </p>
        </div>

      </div>

      <div className="col-span-1 marketing_main_item  py-[20px] px-[16px] xl:py-[32px] xl:px-[24px]">
          <Image className="mx-auto w-[250px] md:w-[1600px] h-auto cursor-pointer transition ease-in-out hover:scale-110"
            width={800}
            height={800}
            src="/images/content/3.png"
            alt="Marketing image"
          />
          <div className="mt-4 mb-2">
          <span className="intro_home_main text-[24px] ">Improved operational efficiency </span>
          </div>
          <p className="text-[16px] text-[#FFFFFFB3]">
          Automating routine tasks like ticket collection, query replies, documentation, and call handling allows the customer service team to focus on more valuable activities like trend analysis and improving responses.
          </p>
        </div>
    
    </div>
  );
};

export default Marketing;
