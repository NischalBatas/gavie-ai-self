import React from "react";
import "./CSS/style.css";
import Introduction from "./Introduction/Introduction";
import DashboardImg from "./DashboardImg/DashboardImg";
import WhyGavie from "./WhyGavie/WhyGavie";
import CustomerSupport from "./CustomerSupport/CustomerSupport";
import Tips from "./Tips/Tips";
import Join from "./Join/Join";
import Footer from "./Footer/Footer";
import Faq from "./Faq/Faq";
import Features from "./Features/Features";
// import { gsap } from "gsap";
// import { useGSAP } from "@gsap/react";
    
// import { ScrollTrigger } from "gsap/ScrollTrigger";


// gsap.registerPlugin(useGSAP,ScrollTrigger);

// gsap.registerPlugin(ScrollTrigger);
const Homes = () => {
  // useEffect(() => {
  //   let ctx = gsap.context(() => {
  //     const tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: ".accordionsWrapper",
  //         pin: true,
  //         start: "top top",
  //         end: "bottom top",
  //         scrub: 1,
  //         ease: "linear",
  //         markers: true,
  //       },
  //     });

  //     tl.to(".accordion", {
  //       height: 150,
  //       paddingBottom: 0,
  //       stagger: 0.5,
  //     });
  //   });
  //   return () => ctx.revert();
  // });

  return (
    <div className="mt-[120px]">
      <Introduction />
      <DashboardImg />
      <WhyGavie />
      <Features />
      <CustomerSupport />
      <Tips />
      <Faq />
      <Join />
      <Footer />
    </div>
  );
};

export default Homes;
