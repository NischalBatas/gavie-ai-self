"use client";
import ScrollToTop from "react-scroll-to-top";
import { FaArrowUp } from "react-icons/fa";
import ProgressBar from "@/components/Animation/ProgressBar";
import NavbarMain from "@/components/Navbar/Navbar";
import { usePathname } from "next/navigation";

const ProtectedLayout = ({ children }) => {
  const pathname=usePathname()
  return (
    <>
      <ProgressBar />
      {pathname !=='/dashboard'  ? <NavbarMain/> :''}
      
      {children}

      <ScrollToTop
        top="40"
        component={<FaArrowUp />}
        className="scroll_top"
        smooth
        width="15"
        height="15"
      />
    </>
  );
};

export default ProtectedLayout;
