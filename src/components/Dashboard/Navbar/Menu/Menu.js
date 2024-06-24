"use client";
import React from "react";
import { HiOutlineUserAdd } from "react-icons/hi";
import { MdOutlineInsertComment } from "react-icons/md";
import { MdNotificationsNone } from "react-icons/md";
import Dropdown from "./Dropdown/Dropdown";

const Menus = () => {
  return (
    <div className="flex items-center gap-4">
      <HiOutlineUserAdd className="text-[24px] text-[#92929D]" />
      <MdOutlineInsertComment className="text-[24px] text-[#92929D]" />
      <MdNotificationsNone className="text-[24px] text-[#92929D]" />

      <Dropdown />
    </div>
  );
};

export default Menus;
