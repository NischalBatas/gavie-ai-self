import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Introduction = ({posts}) => {
  const dateString = posts.blogfield.uploadedDat
  const formattedDate = format(new Date(dateString), 'MMMM d, yyyy');
  return (
    <div className="container_sidespace pb-4 pt-36 relative">
      <div className="main_container2">
        <div className="flex flex-col items-center">
        <span className="bg-white text-black rounded-[24px] py-2 px-4">{formattedDate}</span>
        <p className="intro_home_main text-center max-w-[750px] pt-[22px]  text-[28px] md:text-[58px] font-medium md:leading-[62px] tracking-tight">
          {posts.title}
        </p>
        <div className="flex items-center gap-2 my-[38px]">
          <Image className="rounded-full" width={60} height={60} src='/images/content/user.jpg'
              alt="Blog Background"/>
          <div>
            <span className="text-[16px]">Sujan Timilsina</span>
            <p className="text-[14px] text-[#ffffff82]">Software Engineer</p>
          </div>
        </div>
        </div>
       
      </div>
    </div>
  );
};

export default Introduction;
