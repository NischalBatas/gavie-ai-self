import Image from "next/image";
import React from "react";

const Content_Two = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-5 text-[#92929D] mt-6">
      <div className=" col-span-2 xl:col-span-3 rounded-[20px] bg-[#1C1C24] p-2">
        <Image width={947} height={947} src="/images/dashboard/Shape.png" alt="user_graph" />
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-1 gap-5">
        <div className=" rounded-[20px] bg-[#1C1C24] p-4 flex flex-col justify-around gap-4">
          <div className="flex gap-3 items-center">
            <Image width={90} height={90} src="/images/dashboard/Chart.svg" alt="user_graph" />
            <div className="flex flex-col gap-1">
              <p className="text-[#fafafb] text-[18px] font-semibold">68%</p>
              <span className="text-[#92929D] text-[12px] md:text-[14px] text-wrap">
                Ticket Solving Rate
              </span>
            </div>
          </div>
          <div className="w-full h-[1px] bg-[#44444F]"></div>
          <div className="flex gap-3 items-center">
            <Image width={90} height={90} src="/images/dashboard/Deals.svg" alt="user_graph"/>
            <div className="flex flex-col gap-1">
              <p className="text-[#fafafb] text-[18px] font-semibold">75%</p>
              <span className="text-[#92929D] text-[12px] md:text-[14px]">
                Satisfied Customers
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center md: bg-[#1C1C24] rounded-[20px] p-4">
        <Image width={947} height={947} src="/images/dashboard/Path.svg" alt="user_graph" />
        <div className="flex gap-2 justify-between mt-5">
            <div className="flex flex-col">
                <p className="text-[#FAFAFB] text-[24px] font-semibold">10,254</p>
                <span>Visitors this year</span>
            </div>
            <div>
                <span className="text-[#FC5A5A] text-[16px] font-semibold">1.5%</span>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Content_Two;
