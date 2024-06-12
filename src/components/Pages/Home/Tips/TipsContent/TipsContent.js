import React from "react";
import "../style.css";
import Image from "next/image";
const TipsContent = () => {
  return (
    <div className="inside_sidespace main_container grid sm:grid-cols-2 lg:grid-cols-3 gap-6  pt-[72px]">
      <div className="tips_main_items p-[16px] md:p-[24px]">
        <div>
          <Image className="cursor-pointer transition ease-in-out hover:scale-110"
            width={490}
            height={490}
            src="/images/content/9.png"
            alt="tips items"
          />
        </div>
        <div className="flex flex-col gap-2 md:max-w-[343.67px]">
          <div className="mt-8 mb-4 ">
            <span className="border text-[14px] rounded-[24px] px-5 py-2">
              20 June, 2024
            </span>
          </div>

          <div className="max-w-[343.67px]">
            <span className="text-[24px] font-semibold">
              Unlocking the Power of Markteting Automation
            </span>
          </div>
          <div className="">
            <p className="text-[#FFFFFFBF] text-[16px]">
              Make your database provisioning cloud-native using our database
              generation.
            </p>
          </div>
        </div>
      </div>

      <div className="tips_main_items p-[16px] md:p-[24px]">
        <div>
          <Image className="cursor-pointer transition ease-in-out hover:scale-110"
            width={490}
            height={490}
            src="/images/content/10.png"
            alt="tips items"
          />
        </div>
        <div className="flex flex-col gap-2 md:max-w-[343.67px]">
          <div className="mt-8 mb-4">
            <span className="border text-[14px] rounded-[24px] px-5 py-2">
              20 June, 2024
            </span>
          </div>

          <div className="max-w-[343.67px]">
            <span className="text-[24px] font-semibold">
              Unlocking the Power of Markteting Automation
            </span>
          </div>
          <div className="">
            <p className="text-[#FFFFFFBF] text-[16px]">
              Make your database provisioning cloud-native using our database
              generation.
            </p>
          </div>
        </div>
      </div>


      <div className="tips_main_items p-[16px] md:p-[24px]">
        <div>
          <Image className="cursor-pointer transition ease-in-out hover:scale-110"
            width={490}
            height={490}
            src="/images/content/8.png"
            alt="tips items"
          />
        </div>
        <div className="flex flex-col gap-2 md:max-w-[343.67px]">
          <div className="mt-8 mb-4">
            <span className="border text-[14px] rounded-[24px] px-5 py-2">
              20 June, 2024
            </span>
          </div>

          <div className="max-w-[343.67px]">
            <span className="text-[24px] font-semibold">
              Unlocking the Power of Markteting Automation
            </span>
          </div>
          <div className="">
            <p className="text-[#FFFFFFBF] text-[16px]">
              Make your database provisioning cloud-native using our database
              generation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipsContent;
