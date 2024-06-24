"use client";
import React from "react";
import Dropdown from "./Dropdown/Dropdown";
import { MdSaveAlt } from "react-icons/md";
const Overview = () => {
  return (
    <div className="flex items-center gap-5">
      <p className="text-[24px] font-semibold tracking-wide">Overview</p>
      <div className="flex items-center justify-between w-full">
        <Dropdown />
        <button className="flex items-center gap-2 text-[14px] bg-[#5F35E3] px-2 py-1 rounded-[6px]">
          <MdSaveAlt />
          Generate Report
        </button>
      </div>
    </div>
  );
};

export default Overview;
