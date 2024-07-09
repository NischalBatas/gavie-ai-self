import Image from "next/image";
import Link from "next/link";
import React from "react";

const FooterContent = () => {
  return (
    <div className="flex flex-wrap lg:flex-nowrap  gap-10 justify-center lg:justify-between text-[#6d6686] text-[16px]">
      <div className="flex flex-col justify-center items-center lg:items-start lg:max-w-[308px] text-[#6d6686]">
        <Link href="/">
          <Image width={128} height={31} src="/images/logo/logo.svg" alt="footer_img"/>
        </Link>
        <div className="">
        <p className="text-[16px] my-4">
          Make your database provisioning cloud-native using our database
          generation.
        </p>
        </div>
        <span className="text-white font-semibold">hello@gavi.ai</span>
      </div>

      <div className="flex justify-between flex-wrap gap-6 w-full text-nowrap">
      <div className="flex flex-col gap-[16px] text-[16px]">
        <span className="text-[#fff] font-semibold">Features</span>
        <ul className="flex flex-col gap-[16px]">
            <li className=""><Link href='/'>OmniChannel Support </Link ></li>
            <li className=""><Link href='/'>Easy Deployment</Link ></li>
            <li className=""><Link href='/'>Analytics Dashboard</Link ></li>
            <li className=""><Link href='/'>High Customizability</Link ></li>
        </ul>
      </div>

      <div className="flex flex-col gap-[16px] text-[16px]">
        <span className="text-[#fff] font-semibold">Navigation</span>
        <ul className="flex flex-col gap-[16px]">
            <li className=""><Link href='/'>Why Gavie </Link ></li>
            <li className=""><Link href='/'>Features</Link ></li>
            <li className=""><Link href='/'>Insights</Link ></li>
            <li className=""><Link href='/'>FAQ</Link ></li>
        </ul>
      </div>

      <div className="flex flex-col gap-[16px] text-[16px]">
        <span className="text-[#fff] font-semibold">Social Handle</span>
        <ul className="flex flex-col gap-[16px]">
            <li className=""><Link href='/'>Facebook</Link ></li>
            <li className=""><Link href='/'>Instagram</Link ></li>
            <li className=""><Link href='/'>Threads</Link ></li>
            <li className=""><Link href='/'>Pinterest</Link ></li>
        </ul>
      </div>
      </div>
    </div>
  );
};

export default FooterContent;
