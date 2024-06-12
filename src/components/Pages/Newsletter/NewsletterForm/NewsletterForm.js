"use client";
import Image from "next/image";
import React from "react";
import FormFields from "../FormFields/FormFields";
import toast, { Toaster } from "react-hot-toast";
import "./NewsletterForm.css";
import NewsletterSlider from "@/SplideSlider/NewsletterSlider";
const NewsletterForm = () => {
  return (
    <div className="NewsletterForm_main">
      <div className="newsletter_background"></div>
      <div className="newsletter_main_content flex flex-col pt-[80px] md:pt-[104px] pb-10   bg-no-repeat  md:bg-contain  ">
   
        <div className="main_container flex flex-col justify-center items-center   p-[32px] md:p-[55px]">
          <div>
            <div className="flex items-center justify-center">
              <div className="max-w-[150px] px-[24px] py-[16px] flex items-center justify-center bg-black rounded-[24px]">
                <Image
                  className=""
                  width={100}
                  height={100}
                  src="/images/logo/logo.svg"
                  alt="logo Image"
                />
              </div>
            </div>

            <p className="mt-[15px] leading-[22px] text-[14px] text-center max-w-[508px]">
              GenAI powered customizable chatbot solution for your business.
              Create your own chatbot, personalize it’s actions and integrate
              easily to your infrastructure.
            </p>
          </div>
        </div>
        <div className="main_container mt-[91px] bg-[black]  rounded-[16px] py-[42px] px-[24px] md:p-[55px]">
          <div className="grid md:grid-cols-2 gap-10 md:gap-10">
            <div>
              <div className="max-w-[424px]">
                <div className="max-w-[366px]">
                  <span className="max-w-[366px] text-[24px] md:text-[32px] leading-8 md:leading-[42px] font-bold">
                  Make your inquiries known
                  </span>
                </div>
                <p className="mt-2 md:mt-3 text-[14px] md:text-[16px] leading-[24px]">
                  Contact us and stay up to date with the
                  latest news, updates, and products. Get valuable insights into
                  the world of AI
                </p>
              </div>

              <Toaster
                position="bottom-right"
                toastOptions={{
                  style: {
                    fontSize: "14px",
                    fontWeight: "600",
                    background: "#fff",
                  },
                }}
              />
              {/* <div className="hidden md:flex items-center flex-col justify-center">
         
           <Image className=" mt-10" width={200} height={200} src='/Image/newsletter/qr.png'/>
           <span className="mt-2 text-[12px] text-[#b0b0b0]">Please scan the QR code to access the form.</span>
           </div> */}
              <NewsletterSlider />
            </div>

            <FormFields />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterForm;
