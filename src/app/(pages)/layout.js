import ProgressBar from "@/components/Animation/ProgressBar";
import NavbarMain from "@/components/Navbar/Navbar";
import ScrollToTops from "@/components/ScrollToTop/ScrollToTop";
// import { usePathname } from "next/navigation";

const ProtectedLayout = ({ children }) => {
  // const pathname=usePathname()
  return (
    <>
      <ProgressBar />
      {/* {pathname !=='/dashboard'  ? <NavbarMain/> :''} */}
      <NavbarMain />
      {children}

      <ScrollToTops />
    </>
  );
};

export default ProtectedLayout;
