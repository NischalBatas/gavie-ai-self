import Image from "next/image";
import React from "react";
import { MdOutlineEditNote } from "react-icons/md";
const CusInfo = () => {
  return (
    <div className="flex flex-col gap-5 rounded-[20px] bg-[#1C1C24] p-5">
      <div className="flex flex-col">
        <p>Average Customer Interaction</p>
        <span className="text-[#92929D] text-[14px]">Apr-May</span>
      </div>

      <div className="flex justify-between flex-wrap gap-3 gap-y-6 mt-6">
        <div className="flex gap-3 items-center">
          <Image width={70} height={70} src="/images/dashboard/8.svg" alt="user_graph"/>
          <div className="flex flex-col">
            <p className="text-[#fafafb] text-[18px] font-semibold">30,254</p>
            <span className="text-[#92929D] text-[14px]">Questions Asked</span>
          </div>
        </div>

        <div className="flex gap-3 items-center">
          <Image width={70} height={70} src="/images/dashboard/9.svg" alt="user_graph"/>
          <div className="flex flex-col">
            <p className="text-[#fafafb] text-[18px] font-semibold">8,665</p>
            <span className="text-[#92929D] text-[14px]">Calls</span>
          </div>
        </div>

        <div className="flex gap-3 items-center">
          <Image width={70} height={70} src="/images/dashboard/10.svg" alt="user_graph"/>
          <div className="flex flex-col">
            <p className="text-[#fafafb] text-[18px] font-semibold">1,554</p>
            <span className="text-[#92929D] text-[14px]">Tickets</span>
          </div>
        </div>
      </div>

      <div className="w-full h-[1px] bg-[#44444F]"></div>

      <p className="text-[#92929D] text-[12px] flex gap-2"><MdOutlineEditNote className="text-[15px]"/>
        Net sales, found on the income statement are used to calculate this
        ration returns and refunds must be backed out of total sales to measure
        the truly measure the firm’s assets abillity to generate sales.
      </p>
    </div>
  );
};

export default CusInfo;
